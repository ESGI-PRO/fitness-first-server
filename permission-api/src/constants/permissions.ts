export const adminPermissions = [
  // user
  'user_get_by_id',
  'user_confirm',
  'user_create',
  'token_create',
  'user_search_by_credentials',
  'token_destroy',
  'token_verify',
  'user_get_all',
  'get_user_by_id',
  'user_update_by_id',
  'user_delete_by_id',
  'user_get_by_ids',
  "user_new",

  //training
  'create_exercises',
  'get_user_current_exercises',
  'get_all_exercises',
  'training_delete_by_id',

  // subscription
  'webhook_stripe',
  'find_user_subscriptions',
  'find_invoices_by_userId',

  // recette
  'get_recettes',
  'create_recette',
  'get_ingredients',
  'create_ingredient',
  'get_categories',
  'get_recettes_by_id',
  'get_ingredients_by_id',
  'get_categorie_by_id',
  'get_recettes_by_userId',

  // messenger
  'create_message',
  'create_room',
  'get_room_messages',
  'get_all_rooms',
  'create_video_meeting',
  'update_video_meeting',
  'find_all_video_meeting',
  'get_twilio_token',
  'get_rooms_by_member_ids',

  // analytic
  'create_analytics',
  'create_visitors',
  'update_analytics_visitors',
  'find_all_analytics',
  'find_all_visitors',
  'find_analytics_by_params',
  'find_analytics_visitors_by_params'
];

export const userPermissions = [
  // user
  'user_get_by_id',
  'user_confirm',
  'user_create',
  'token_create',
  'user_search_by_credentials',
  'token_destroy',
  'token_verify',
  'user_get_all',
  'get_user_by_id',
  'user_update_by_id',
  'user_delete_by_id',
  'user_get_by_ids',
  "user_new",

  //training
  'create_exercises',
  'get_user_current_exercises',
  'get_all_exercises',
  'training_delete_by_id',


  // subscription
  'webhook_stripe',
  'find_user_subscriptions',
  'find_invoices_by_userId',
  'get_recettes',
  'create_recette',
  'get_ingredients',
  'create_ingredient',
  'get_categories',
  'get_recettes_by_id',
  'get_ingredients_by_id',
  'get_categorie_by_id',
  'get_recettes_by_userId',

  // messenger
  'create_message',
  'create_room',
  'get_room_messages',
  'get_all_rooms',
  'create_video_meeting',
  'update_video_meeting',
  'find_all_video_meeting',
  'get_twilio_token',
  'get_rooms_by_member_ids',

  // analytic
  'create_analytics',
  'create_visitors',
  'update_analytics_visitors',
  'find_all_analytics',
  'find_all_visitors',
  'find_analytics_by_params',
  'find_analytics_visitors_by_params'
]
