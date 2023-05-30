import {
  Box,
  Button,
  Center,
  FlatList,
  Flex,
  HStack,
  Heading,
  Icon,
  InputGroup,
  Modal,
  Radio,
  ScrollView,
  Text,
  TextArea,
  VStack,
  View,
} from "native-base";
import { StyleSheet, TextInput } from "react-native";
import { SafeAreaView } from "react-native";
import { Fonts, Sizes } from "../../../constants/styles";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { StatusBar } from "react-native";
import { Input, Stack, FormControl } from "native-base";
import { useEffect, useState } from "react";
import diacritic from "diacritic";
import nutrition from "../../../api/nutrition";
import { Header, ListItem } from "@rneui/base";

const InstructionsPageScreen = ({ navigation }) => {
  const [searchWord, setWord] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [ingredients, setIngredients] = useState(nutrition.ingredients);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);

  const [quantité, setQuantité] = useState("");
  const [instruction, setInstruction] = useState("");
  const [listIngredients, setListIngredients] = useState([
    // {
    //   name: String,
    //   quantite: Number,
    //   instruction: String,
    // },
  ]);

  const [display, setDisplay] = useState(false);

  function addInList(item) {
    console.log(item);
    setListIngredients([
      ...listIngredients,
      {
        name: item.name,
        quantite: 0,
      },
    ]);

    setWord("");
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
      <StatusBar backgroundColor={Colors.primaryColor} />
      <ScrollView>
        <View style={{ flex: 1 }}>
          {header()}
          {formRecette()}
          {saisieForm()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );

  function saisieForm() {
    const modifyObject = (name, key, value) => {
      console.log(name, key, value);
      const updatedData = listIngredients.map((item) => {
        if (item.name === name) {
          return { ...item, quantite: value };
        }
        return item;
      });
      setListIngredients([...updatedData]);
    };

    const deleteRow = (index) => {
        console.log(index)

        var array = listIngredients
        array.splice(index, 1);

        setListIngredients([...array])
    }
    return (
      <View>
        <Text fontSize="xs">{JSON.stringify(listIngredients)}</Text>
        <Text fontSize="xs">{instruction}</Text>

        {listIngredients.map((item, index) => {
          return (
            <VStack className="my-4 m-4" key={`${index}`}>
              <View>

                <View className="flex flex-row justify-between items-center">
                <Heading>{item.name}</Heading>
                <Text colorScheme="primary" className="underline italic" onPress={() => deleteRow(index)}>
                  supprimer
                </Text>
                </View>
                

                <Text colorScheme="primary" onPress={() => setShowModal(true)}>
                  Voir la fiche produit
                </Text>

                
              </View>

              <Text fontSize="xs" className="my-2">
                Quantite
              </Text>

              <Input
                placeholder={`Quantité de ${item.name} en gr`}
                onChangeText={(text) =>
                  modifyObject(item.name, "quantite", text)
                }
              />
            </VStack>
          );
        })}

        {listIngredients.length > 0 && (
          <View className="m-4">
            <Text fontSize="xs" className="my-2">
              instructions{" "}
            </Text>

            <TextArea
              shadow={2}
              h={20}
              placeholder="Decrivez votre recette ..."
              value={instruction}
              onChangeText={(text) => setInstruction(text)}
              selectionColor={Colors.primaryColor}
              className="w-full my-5"
              _light={{
                placeholderTextColor: "trueGray.700",
                bg: "coolGray.100",
                _hover: {
                  bg: "coolGray.200",
                },
                _focus: {
                  bg: "coolGray.200:alpha.70",
                },
              }}
              _dark={{
                bg: "coolGray.800",
                _hover: {
                  bg: "coolGray.900",
                },
                _focus: {
                  bg: "coolGray.900:alpha.70",
                },
              }}
            />
          </View>
        )}

        <Button colorScheme="green" onPress={() => sendData()}>
          Valider l'etape
        </Button>
      </View>
    );
  }

  function sendData() {
    navigation.navigate("AddRecettes", {
      data: [...listIngredients, instruction],
    });

    setListIngredients([])
    setInstruction("")
  }

  function header() {
    return (
      <Flex direction="row" className="flex justify-between mx-2">
        <Text
          style={{
            margin: Sizes.fixPadding * 2.0,
            ...Fonts.blackColor18SemiBold,
          }}
        >
          Ajouter une etape
        </Text>
      </Flex>
    );
  }

  function formRecette() {
    const filteredData = ingredients.filter((item) =>
      diacritic
        .clean(item.name.toLowerCase())
        .includes(searchWord.toLowerCase())
    );

    return (
      <View>
        <Box p="12" rounded="lg">
          <FormControl>
            <Stack space={5}>
              <View>
                <Text fontSize="md">
                  Ajouter des ingredients ({ingredients?.length}) {searchWord}
                </Text>

                <Text fontSize="xs">
                  {filteredData?.length > 0
                    ? `${filteredData?.length} ${
                        filteredData.length > 1 ? "ingredients" : "ingredient"
                      } trouvés`
                    : ""}
                </Text>

                <View>
                  <Input
                    style={{
                      height: 40,
                      borderColor: "gray",
                      borderWidth: 1,
                      paddingHorizontal: 10,
                    }}
                    placeholder="Recherche..."
                    value={searchWord}
                    onChangeText={(text) => setWord(text)}
                  />
                  <FlatList
                    className={searchWord.length > 0 ? "" : "hidden"}
                    data={filteredData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                      <>
                        <ListItem onPress={() => addInList(item)}>
                          <ListItem.Content>
                            <ListItem.Title>{item.name}</ListItem.Title>
                            <ListItem.Subtitle>
                              {`${item.calories} cal pour 100 grammes`}
                            </ListItem.Subtitle>
                            <ListItem.Subtitle>
                              <Text
                                colorScheme="primary"
                                className=" w-4 my-4 h-2 italic"
                                onPress={() => setShowModal(true)}
                              >
                                Voir la fiche produit
                              </Text>
                            </ListItem.Subtitle>
                          </ListItem.Content>
                        </ListItem>
                        {AddIngredientModal(item)}
                      </>
                    )}
                    ListEmptyComponent={<Text>Aucun résultat</Text>}
                  />
                </View>
              </View>
            </Stack>
          </FormControl>
        </Box>
      </View>
    );
  }

  function AddIngredientModal(item) {
    return (
      <Center>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="lg">
          <Modal.Content maxWidth="350">
            <Modal.CloseButton />
            <Modal.Header> Fiche produit : {item.name}</Modal.Header>
            <Modal.Body>
              <VStack space={3}>
                <HStack alignItems="center" justifyContent="space-between">
                  <Text fontWeight="medium">Sucre :</Text>
                  <Text color="blueGray.400"> {item.sugar_g}/gr</Text>
                </HStack>

                <HStack alignItems="center" justifyContent="space-between">
                  <Text fontWeight="medium">Calories</Text>
                  <Text color="blueGray.400"> {item.calories}/gr</Text>
                </HStack>

                <HStack alignItems="center" justifyContent="space-between">
                  <Text fontWeight="medium">fat_total_g</Text>
                  <Text color="blueGray.400"> {item.fat_total_g}/gr</Text>
                </HStack>

                <HStack alignItems="center" justifyContent="space-between">
                  <Text fontWeight="medium">Protéine</Text>
                  <Text color="blueGray.400"> {item.protein_g}/gr</Text>
                </HStack>

                <HStack alignItems="center" justifyContent="space-between">
                  <Text fontWeight="medium">Sodium </Text>
                  <Text color="blueGray.400"> {item.protein_g}/mg</Text>
                </HStack>

                <HStack alignItems="center" justifyContent="space-between">
                  <Text fontWeight="medium">Potassium</Text>
                  <Text color="blueGray.400"> {item.potassium_mg}/mg</Text>
                </HStack>

                <HStack alignItems="center" justifyContent="space-between">
                  <Text fontWeight="medium">Cholesterol </Text>
                  <Text color="blueGray.400"> {item.cholesterol_mg}/mg</Text>
                </HStack>

                <HStack alignItems="center" justifyContent="space-between">
                  <Text fontWeight="medium">Carbohydrates </Text>
                  <Text color="blueGray.400">
                    {" "}
                    {item.carbohydrates_total_g}/g
                  </Text>
                </HStack>

                <HStack alignItems="center" justifyContent="space-between">
                  <Text fontWeight="medium">Fibre </Text>
                  <Text color="blueGray.400"> {item.fiber_g}/g</Text>
                </HStack>
              </VStack>
            </Modal.Body>
            <Modal.Footer>
              <Button
                flex="1"
                onPress={() => {
                  setShowModal2(true);
                }}
              >
                Continue
              </Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal>

        {/* <Modal
          isOpen={showModal2}
          onClose={() => setShowModal2(false)}
          size="lg"
        >
          <Modal.Content maxWidth="350">
            <Modal.CloseButton />
            <Modal.Header>Select Address</Modal.Header>
            <Modal.Body>
              <VStack>
                <Text fontSize="xs">Quantite</Text>

                <Input
                  placeholder={`Quantité de ${item.name} en gr`}
                  onChangeText={(text) => setQuantité(text)}
                />

                <Text fontSize="xs">instructions </Text>

                <TextArea
                  shadow={2}
                  h={20}
                  placeholder="Decrivez votre programme ..."
                  value={instruction}
                  onChangeText={(text) => setInstruction(text)}
                  selectionColor={Colors.primaryColor}
                  className="w-full m-1"
                  _light={{
                    placeholderTextColor: "trueGray.700",
                    bg: "coolGray.100",
                    _hover: {
                      bg: "coolGray.200",
                    },
                    _focus: {
                      bg: "coolGray.200:alpha.70",
                    },
                  }}
                  _dark={{
                    bg: "coolGray.800",
                    _hover: {
                      bg: "coolGray.900",
                    },
                    _focus: {
                      bg: "coolGray.900:alpha.70",
                    },
                  }}
                />
              </VStack>
            </Modal.Body>
            <Modal.Footer>
              <Button
                flex="1"
                onPress={() => {
                  setShowModal3(true);
                }}
              >
                Continue
              </Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal>

        <Modal
          isOpen={showModal3}
          size="lg"
          onClose={() => setShowModal3(false)}
        >
          <Modal.Content maxWidth="350">
            <Modal.CloseButton />
            <Modal.Header>Payment Options</Modal.Header>
            <Modal.Body>
              <Radio.Group name="payment" size="sm">
                <VStack space={3}>
                  <Radio
                    alignItems="flex-start"
                    _text={{
                      mt: "-1",
                      ml: "2",
                      fontSize: "sm",
                    }}
                    value="payment1"
                  >
                    Cash on delivery
                  </Radio>
                  <Radio
                    alignItems="flex-start"
                    _text={{
                      mt: "-1",
                      ml: "2",
                      fontSize: "sm",
                    }}
                    value="payment2"
                  >
                    Credit/ Debit/ ATM Card
                  </Radio>
                  <Radio
                    alignItems="flex-start"
                    _text={{
                      mt: "-1",
                      ml: "2",
                      fontSize: "sm",
                    }}
                    value="payment3"
                  >
                    UPI
                  </Radio>
                </VStack>
              </Radio.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button
                flex="1"
                onPress={() => {
                  setShowModal(false);
                  setShowModal2(false);
                  setShowModal3(false);
                }}
              >
                Checkout
              </Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal> */}
      </Center>
    );
  }
};

const styles = StyleSheet.create({
  snackBarStyle: {
    position: "absolute",
    bottom: -10.0,
    left: -10.0,
    right: -10.0,
    backgroundColor: "#333333",
  },
  healthTipsInfoWrapStyle: {
    borderRadius: Sizes.fixPadding,
    marginHorizontal: Sizes.fixPadding * 2.0,
    backgroundColor: Colors.whiteColor,
    elevation: 4.0,
    marginBottom: Sizes.fixPadding * 2.0,
  },
  healthTipImageStyle: {
    height: 100.0,
    width: "100%",
    borderTopLeftRadius: Sizes.fixPadding,
    borderTopRightRadius: Sizes.fixPadding,
  },
});

export default InstructionsPageScreen;
