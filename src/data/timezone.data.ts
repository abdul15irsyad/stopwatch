import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

import { renderOffset } from '@/util/time.util';
dayjs.extend(utc);
dayjs.extend(timezone);

export const timezones = [
  { id: '93c09027-a93f-4e7b-8bd8-8026905f5752', timezone: 'Africa/Abidjan' },
  { id: '66980557-bd22-491e-a921-cc88ca3d0610', timezone: 'Africa/Algiers' },
  { id: '3b61af6d-9169-4628-9dbc-fa7a7da76941', timezone: 'Africa/Bissau' },
  { id: '1fa8dac5-6f4f-45d5-b727-017633c059aa', timezone: 'Africa/Cairo' },
  { id: 'cd545af4-e539-4d91-abed-9793d509a069', timezone: 'Africa/Casablanca' },
  { id: 'b82f10cb-6f40-4569-a330-10f6bd4d6a67', timezone: 'Africa/Ceuta' },
  { id: '3fd1effc-e816-41fd-8f6b-96fac38ae08c', timezone: 'Africa/El_Aaiun' },
  {
    id: '7263d2dc-40fc-4681-8ce5-46c0119a9682',
    timezone: 'Africa/Johannesburg'
  },
  { id: '80011742-744f-431d-a17f-e994b3e01de5', timezone: 'Africa/Juba' },
  { id: 'a070a1e9-a0e6-447c-86c8-a6377ece1535', timezone: 'Africa/Khartoum' },
  { id: 'ba9429d0-b289-454a-a928-6893e7f74294', timezone: 'Africa/Lagos' },
  { id: '7da7d6c5-af64-4109-9554-02961248e54f', timezone: 'Africa/Maputo' },
  { id: 'd2d1cfd5-d0d0-420d-b52d-23b784f57db8', timezone: 'Africa/Monrovia' },
  { id: 'a0aab3eb-8444-4fbc-acc3-77a6e3fadb62', timezone: 'Africa/Nairobi' },
  { id: '6e9b3803-9dd0-47e2-b077-d0e3199fa6cd', timezone: 'Africa/Ndjamena' },
  { id: '60c80f56-35fc-481b-8934-00889b17f002', timezone: 'Africa/Sao_Tome' },
  { id: '3c3ce52d-4e3a-453d-9647-7d1523f8f807', timezone: 'Africa/Tripoli' },
  { id: 'a71e9a4c-5937-4e0f-99d6-3a0f671ed386', timezone: 'Africa/Tunis' },
  { id: 'f7554c46-3c64-4436-ab41-41e509afeac2', timezone: 'Africa/Windhoek' },
  { id: 'ad7a529e-c0ae-4d1c-8239-dad89f671eae', timezone: 'America/Adak' },
  { id: 'f5e7eec0-84bd-4cca-8f9b-d924c002a483', timezone: 'America/Anchorage' },
  { id: '2becc3b0-bf7d-4a4a-a3a9-8ac8d6acbc7f', timezone: 'America/Araguaina' },
  {
    id: '943dcae3-36ed-44df-b5a1-d0908e9086b3',
    timezone: 'America/Argentina/Buenos_Aires'
  },
  {
    id: '7ebe19fb-b712-4825-af11-20158f53e0ba',
    timezone: 'America/Argentina/Catamarca'
  },
  {
    id: 'b7f32717-b36b-4043-93bf-01d27951e05e',
    timezone: 'America/Argentina/Cordoba'
  },
  {
    id: '0f66461e-09a0-4b73-ba23-021f2c738855',
    timezone: 'America/Argentina/Jujuy'
  },
  {
    id: 'd8881d71-f2b5-4693-b9be-303ed620886b',
    timezone: 'America/Argentina/La_Rioja'
  },
  {
    id: '6f63809e-3404-4d22-a639-e40089847f1f',
    timezone: 'America/Argentina/Mendoza'
  },
  {
    id: '248142b1-4e32-4727-b552-b29c885d6474',
    timezone: 'America/Argentina/Rio_Gallegos'
  },
  {
    id: 'e51641ef-b165-4f54-96bc-be1771a8aa1f',
    timezone: 'America/Argentina/Salta'
  },
  {
    id: '1c13c954-e58d-4ee3-bf5d-09fdb8436778',
    timezone: 'America/Argentina/San_Juan'
  },
  {
    id: '74f8d7b1-7b6b-40e0-91c5-476f9f29af6b',
    timezone: 'America/Argentina/San_Luis'
  },
  {
    id: '2eb6c9a2-f9c1-4607-a35b-92de7bf6313a',
    timezone: 'America/Argentina/Tucuman'
  },
  {
    id: 'f73426c0-5eaa-4afc-8ee8-4267faf114ce',
    timezone: 'America/Argentina/Ushuaia'
  },
  { id: '3e911fd4-fa85-460b-b9fc-7a2f92a9e46d', timezone: 'America/Asuncion' },
  { id: 'c4380c99-5db9-45dc-b148-375a3991e1b8', timezone: 'America/Bahia' },
  {
    id: '4cbda92a-0142-41e9-ae66-d0a47bf04f5f',
    timezone: 'America/Bahia_Banderas'
  },
  { id: '4bb2031b-d671-4768-bf3f-6c05e7b3146e', timezone: 'America/Barbados' },
  { id: '002afb13-494f-4499-aae9-1b0cbb04bb38', timezone: 'America/Belem' },
  { id: '0cc75b45-37d6-4ed7-b8ad-0d02fcadefbb', timezone: 'America/Belize' },
  { id: 'da5c1275-f8cd-4864-ae41-ecfd5b7c4e69', timezone: 'America/Boa_Vista' },
  { id: '43aacfc2-558b-4f87-a405-5fb0a6a2fc0c', timezone: 'America/Bogota' },
  { id: 'f29a76e7-0f70-4b8d-b92d-4f83794b600b', timezone: 'America/Boise' },
  {
    id: 'ee08fb16-b584-4e81-b694-c08246371a7b',
    timezone: 'America/Cambridge_Bay'
  },
  {
    id: 'f9658789-6bc0-47f3-9f18-7fdef4e78c9f',
    timezone: 'America/Campo_Grande'
  },
  { id: 'b31431a4-4f54-4ff3-8d72-549ae182026f', timezone: 'America/Cancun' },
  { id: '699fa9bb-4b84-41ac-8065-fbdd0e82c519', timezone: 'America/Caracas' },
  { id: '96a7466d-9e5a-438d-bf28-a8dc11be3491', timezone: 'America/Cayenne' },
  { id: 'ab579077-bdda-4abe-a7ea-d6457bf2c896', timezone: 'America/Chicago' },
  { id: '69006527-9210-4f45-816e-97a72b01a82a', timezone: 'America/Chihuahua' },
  {
    id: 'd56898b2-85c8-4fba-b3fa-b9bc41880002',
    timezone: 'America/Ciudad_Juarez'
  },
  {
    id: '3096169a-4d41-4ada-93b5-58644cbb350f',
    timezone: 'America/Costa_Rica'
  },
  { id: 'b3755e5e-2f36-4c6e-966d-8bd46ceb018f', timezone: 'America/Cuiaba' },
  {
    id: '044c7ba8-f833-47c7-bcc1-b74e6d958706',
    timezone: 'America/Danmarkshavn'
  },
  { id: '5e8c0a32-1ba6-4e83-9a14-206be8c7e004', timezone: 'America/Dawson' },
  {
    id: 'fb095b3c-14df-4825-8559-b15104c0b0dd',
    timezone: 'America/Dawson_Creek'
  },
  { id: '8187ef85-b3fb-49fb-b616-fbc7f0045166', timezone: 'America/Denver' },
  { id: 'e04d39d6-196e-4099-9066-04f2ac5ec253', timezone: 'America/Detroit' },
  { id: '9ed46a4e-2e65-4b6d-9da4-762ce536b89b', timezone: 'America/Edmonton' },
  { id: 'bd878d84-8d3b-4f2d-9ddb-4dc710036e7a', timezone: 'America/Eirunepe' },
  {
    id: '5cba9a28-7a25-4a92-9e68-e2708916d5ab',
    timezone: 'America/El_Salvador'
  },
  {
    id: '0aedef35-6788-4839-8a65-987990bc4649',
    timezone: 'America/Fort_Nelson'
  },
  { id: '5fae870c-821c-4278-8c0c-229da5d78a23', timezone: 'America/Fortaleza' },
  { id: '5048799f-bbaa-41c9-b156-321c85efd37d', timezone: 'America/Glace_Bay' },
  { id: 'cee91252-beaa-4484-b92c-06b62a9a0ee4', timezone: 'America/Goose_Bay' },
  {
    id: 'a9407674-da46-4a0a-8af9-88bc33323f6f',
    timezone: 'America/Grand_Turk'
  },
  { id: 'bbf9d545-3e70-454c-aa34-7e5958ff7caa', timezone: 'America/Guatemala' },
  { id: '19713a3a-d353-4a9e-ba2e-3138fca88955', timezone: 'America/Guayaquil' },
  { id: 'a4b9429c-043d-4088-ae4f-ad601364bf65', timezone: 'America/Guyana' },
  { id: '72e630b8-152b-42f9-a749-74bb6cfbbdcd', timezone: 'America/Halifax' },
  { id: '77b6baa6-f123-40f9-bf21-6f806ae20898', timezone: 'America/Havana' },
  {
    id: 'd6905c72-c177-46d2-bd33-7e1c06ce5fde',
    timezone: 'America/Hermosillo'
  },
  {
    id: '1eac2fbf-59b9-4ba5-9f8d-333731706d6a',
    timezone: 'America/Indiana/Indianapolis'
  },
  {
    id: '9f56de17-3b7e-4233-976f-e4ac1e6ab901',
    timezone: 'America/Indiana/Knox'
  },
  {
    id: '3beee3b0-0e90-44c4-9ef6-0e502c93774e',
    timezone: 'America/Indiana/Marengo'
  },
  {
    id: 'ab50019d-7bf0-46d2-b9fe-154209106927',
    timezone: 'America/Indiana/Petersburg'
  },
  {
    id: '470b6642-3003-4bb4-9d8c-fa22bf257d6d',
    timezone: 'America/Indiana/Tell_City'
  },
  {
    id: '17443356-fe1d-49d5-9e69-5d7c9427f754',
    timezone: 'America/Indiana/Vevay'
  },
  {
    id: '2ab5dc62-6dfe-4733-b0b2-7ff02e8a538c',
    timezone: 'America/Indiana/Vincennes'
  },
  {
    id: 'cc680b36-a394-4b3b-9f17-02535b582dcc',
    timezone: 'America/Indiana/Winamac'
  },
  { id: '4daf5c38-92da-4780-b4a9-1a0a5d4caded', timezone: 'America/Inuvik' },
  { id: 'b6f22010-8bbe-4de4-a0a0-bbf21f4119fd', timezone: 'America/Iqaluit' },
  { id: '00ec476e-bcdf-4b49-90cf-d7f6f3ac63e1', timezone: 'America/Jamaica' },
  { id: '2b0c495e-7b31-40e3-8525-dfcef2c378b9', timezone: 'America/Juneau' },
  {
    id: '7b6355e3-87d8-4e86-9dff-f918d0fd8edb',
    timezone: 'America/Kentucky/Louisville'
  },
  {
    id: 'ffdc2ed9-44a4-4a7e-ac66-e1ec897c5be7',
    timezone: 'America/Kentucky/Monticello'
  },
  { id: '180f78c1-4ddb-46f3-8e99-ca02b0ccd3df', timezone: 'America/La_Paz' },
  { id: 'f1330fa9-b67c-488d-8462-f20e39781ea9', timezone: 'America/Lima' },
  {
    id: 'f513190f-948e-4da7-8c60-2f1e4258da54',
    timezone: 'America/Los_Angeles'
  },
  { id: '2cea6713-f7ca-4c5b-9e36-cebb5272f5ce', timezone: 'America/Maceio' },
  { id: '2603ea16-b6f3-443f-bc1e-951ab031f6e3', timezone: 'America/Managua' },
  { id: '178d7487-fbbd-4895-8941-246ffeadf177', timezone: 'America/Manaus' },
  {
    id: 'aeaf4d04-b593-4442-80a4-ff2a150a8b19',
    timezone: 'America/Martinique'
  },
  { id: 'd3b4d6ee-1658-4737-96bb-a254efda9e4f', timezone: 'America/Matamoros' },
  { id: '7c4ecee4-3408-43e9-b2f2-040ddc2ca588', timezone: 'America/Mazatlan' },
  { id: 'a47b7c3f-75e0-4841-8c5f-69ba8b01bfb8', timezone: 'America/Menominee' },
  { id: '706fed6e-fa3c-44d2-b5ee-fec3b734fc50', timezone: 'America/Merida' },
  {
    id: 'f535e2d9-728b-482c-a1be-e2e960239448',
    timezone: 'America/Metlakatla'
  },
  {
    id: '7a1177e2-a680-4dc3-b84d-28b4cf9a87ea',
    timezone: 'America/Mexico_City'
  },
  { id: 'a8903391-b8b2-49ca-b38c-5f9cdf97f9d0', timezone: 'America/Miquelon' },
  { id: 'c05c83ad-c0e9-4b1a-a24a-7767a8a7c17d', timezone: 'America/Moncton' },
  { id: 'b4cba9e3-6753-417b-a736-9b43f87f0091', timezone: 'America/Monterrey' },
  {
    id: '6db9b60c-6db7-4101-b46e-1e9955a0a557',
    timezone: 'America/Montevideo'
  },
  { id: 'b974737f-5b1f-4f6f-89e0-47eba0a3de54', timezone: 'America/New_York' },
  { id: '03b68dd6-e23d-4b78-8645-7feb402a8663', timezone: 'America/Nome' },
  { id: '35789d8a-1ac7-4672-a6fe-6fdacfebe423', timezone: 'America/Noronha' },
  {
    id: 'b4e2f055-968b-49d8-8127-7af4d07e1dc4',
    timezone: 'America/North_Dakota/Beulah'
  },
  {
    id: '8c98fd9c-be75-44fc-9c87-6567ed01bfd9',
    timezone: 'America/North_Dakota/Center'
  },
  {
    id: '1be4ac70-ce38-41f8-bbe7-0e7bbdea56ac',
    timezone: 'America/North_Dakota/New_Salem'
  },
  { id: '904301b2-0b9f-4548-a0df-0d43e5ebdd85', timezone: 'America/Nuuk' },
  { id: '590ed42d-ec85-4c0e-8b65-b4c8377c3f36', timezone: 'America/Ojinaga' },
  { id: '38c0a5d4-d778-4763-a473-89be4f1aff25', timezone: 'America/Panama' },
  {
    id: '8bde5f37-6d5b-49f7-be0c-eb1f9031e37c',
    timezone: 'America/Paramaribo'
  },
  { id: 'd99d6106-b260-4c6f-9f14-d0a1713f66ed', timezone: 'America/Phoenix' },
  {
    id: '9d693925-f0ba-4bc8-ac77-08de1b73c88a',
    timezone: 'America/Port-au-Prince'
  },
  {
    id: 'd8a0e0e1-c4b6-480b-af94-595928e30e8c',
    timezone: 'America/Porto_Velho'
  },
  {
    id: 'ec95771c-874b-493b-a19e-7baf56901020',
    timezone: 'America/Puerto_Rico'
  },
  {
    id: 'cc6e043a-16dc-4b51-b6a9-b23a89887c9f',
    timezone: 'America/Punta_Arenas'
  },
  {
    id: 'ea30c1ca-ea04-4b63-b965-addbb5db7061',
    timezone: 'America/Rankin_Inlet'
  },
  { id: '646fa1a1-de49-4781-85c3-0424dee821ef', timezone: 'America/Recife' },
  { id: '62dbc35c-8dc0-4899-ae72-38409ebfd15a', timezone: 'America/Regina' },
  { id: 'd0644a1e-595a-4176-a533-009c4f4a775c', timezone: 'America/Resolute' },
  {
    id: '7aea8e71-7de4-4070-96b8-aaa013da557e',
    timezone: 'America/Rio_Branco'
  },
  { id: '802e90db-c01a-4741-9606-2dd1bd65f531', timezone: 'America/Santarem' },
  { id: '27fe9bd7-0b23-49c9-a5d2-e5e33475c36a', timezone: 'America/Santiago' },
  {
    id: '97dbde05-5b0f-4014-b7f7-c595e3e98a48',
    timezone: 'America/Santo_Domingo'
  },
  { id: '076304e3-439b-494c-9abb-e63ef73795c6', timezone: 'America/Sao_Paulo' },
  {
    id: 'f614a033-b4e5-4680-9874-ecc63934ed15',
    timezone: 'America/Scoresbysund'
  },
  { id: '1f7090dd-6b59-4380-89e6-bc561192a23c', timezone: 'America/Sitka' },
  { id: '4463c515-8fef-40b0-aba3-84aacb7446d0', timezone: 'America/St_Johns' },
  {
    id: '8ee445fa-a51d-4999-a985-0fb07b93822d',
    timezone: 'America/Swift_Current'
  },
  {
    id: 'd11183a6-f29f-47dd-8ccc-0423e969bd3a',
    timezone: 'America/Tegucigalpa'
  },
  { id: 'd7ce67a6-a586-43dc-815f-552c1ed38635', timezone: 'America/Thule' },
  { id: '739dc80b-782a-4332-bd4f-964acacb78e3', timezone: 'America/Tijuana' },
  { id: '328ea611-60dc-493a-91be-7c3ebd8abcce', timezone: 'America/Toronto' },
  { id: 'b4615a82-abce-4951-a98a-eba856876e59', timezone: 'America/Vancouver' },
  {
    id: '92a40c86-b5c2-48c1-b04e-4835daec6b95',
    timezone: 'America/Whitehorse'
  },
  { id: '1df9ae91-c8c3-4de0-a2fa-3187a5585dbf', timezone: 'America/Winnipeg' },
  { id: 'b999e1c2-490f-4d5a-b34f-f245190ab62a', timezone: 'America/Yakutat' },
  { id: '44aa78c9-0438-45ca-aaeb-e5f84f7d9324', timezone: 'Antarctica/Casey' },
  { id: '76b01f96-aea4-4e00-a85b-b9f22ead98ab', timezone: 'Antarctica/Davis' },
  {
    id: 'e4659c23-4b57-490e-b227-13e4e5e2ee63',
    timezone: 'Antarctica/Macquarie'
  },
  { id: '394ac1ce-8a38-4c95-b698-b9dc2f79867e', timezone: 'Antarctica/Mawson' },
  { id: '046d7949-035f-4927-9eff-63f11c2f1aa6', timezone: 'Antarctica/Palmer' },
  {
    id: '76c6a38b-29e5-4de9-85d9-ec81a3571e7b',
    timezone: 'Antarctica/Rothera'
  },
  { id: '4003ad86-b959-4bd4-9cd1-70376785c053', timezone: 'Antarctica/Troll' },
  { id: '635c3f94-927a-48ef-9969-3a0edf59189f', timezone: 'Asia/Almaty' },
  { id: '62b8d110-8c91-4579-a02b-8702bc25f604', timezone: 'Asia/Amman' },
  { id: '5e7c1b96-ec47-4d4e-a66a-3a6bc97cbd0d', timezone: 'Asia/Anadyr' },
  { id: '950ef9c7-a9da-48ff-ad50-d088c6cfb4f6', timezone: 'Asia/Aqtau' },
  { id: '20c713c5-8a8f-4255-99aa-0d9e66e25343', timezone: 'Asia/Aqtobe' },
  { id: '20713ebf-d39a-43de-b93c-3c826e52aac6', timezone: 'Asia/Ashgabat' },
  { id: '7b226bbf-6fec-4876-8fc6-0ddb8fa92037', timezone: 'Asia/Atyrau' },
  { id: 'a900f964-199b-4263-aee6-0ddca04c5b6a', timezone: 'Asia/Baghdad' },
  { id: '9d53bb0b-ec2a-4c73-8634-393e2a6def93', timezone: 'Asia/Baku' },
  { id: 'fea6be05-e094-4412-96f4-3c92e8d52f3b', timezone: 'Asia/Bangkok' },
  { id: '25240256-edf3-4a4c-9ff2-62a2c5b8e8de', timezone: 'Asia/Barnaul' },
  { id: 'bf6e15c9-20ec-417c-b8e5-2417592ec107', timezone: 'Asia/Beirut' },
  { id: 'caef9399-049a-4a77-a306-7bdc26386079', timezone: 'Asia/Bishkek' },
  { id: 'd0f3ec10-d9af-4e6d-85f9-953181687f36', timezone: 'Asia/Chita' },
  { id: 'c8bc4af3-9642-47da-ba2f-8206cff060e5', timezone: 'Asia/Choibalsan' },
  { id: '3eea4cb1-86c5-4632-98ff-0d1c3154f915', timezone: 'Asia/Colombo' },
  { id: '78ea9959-f6f1-410e-9c7e-ce2053bb27ec', timezone: 'Asia/Damascus' },
  { id: 'e3110d3d-8ae6-49cf-bfac-94667247df1a', timezone: 'Asia/Dhaka' },
  { id: '666da330-b9ad-464d-9739-9fd2e621607a', timezone: 'Asia/Dili' },
  { id: '0bb48462-dfd5-490d-b756-b04fe2f0857c', timezone: 'Asia/Dubai' },
  { id: 'eb7d3897-0d5e-4444-a7b9-a9b4c65e36ca', timezone: 'Asia/Dushanbe' },
  { id: '619b41a1-7210-4cb3-ade9-0fd2f5c1b6ea', timezone: 'Asia/Famagusta' },
  { id: '0880a2f0-fe16-406f-a1d9-6ea8927acf12', timezone: 'Asia/Gaza' },
  { id: '31db9168-3d2d-452d-9245-1bfa272697a8', timezone: 'Asia/Hebron' },
  { id: 'd0044448-37d5-4dea-bc5a-7891663c6b45', timezone: 'Asia/Ho_Chi_Minh' },
  { id: '2600021d-8fe2-499b-92a9-0e013a86627f', timezone: 'Asia/Hong_Kong' },
  { id: 'a9aae1b2-1d66-4c08-ad07-7ddff89cf731', timezone: 'Asia/Hovd' },
  { id: 'd2404c10-572e-4924-8ca4-de250c4ee23f', timezone: 'Asia/Irkutsk' },
  { id: '2ec3cfbe-9fe3-4b1a-b9d1-1a3593192df3', timezone: 'Asia/Jakarta' },
  { id: '138c8b13-4976-4c91-a6c5-6593dc0dbce1', timezone: 'Asia/Jayapura' },
  { id: 'aa7da91b-4c00-4c08-b983-68fb6fb95892', timezone: 'Asia/Jerusalem' },
  { id: '86044782-1f10-4ae7-bacb-95d47817ba34', timezone: 'Asia/Kabul' },
  { id: '2f34a9e2-959c-4097-a12e-965f2b0ff62a', timezone: 'Asia/Kamchatka' },
  { id: '9dc3687a-aeb3-49e4-bb8a-fdc6486edbd5', timezone: 'Asia/Karachi' },
  { id: 'b2f3b0ed-b37a-4132-ace2-de8fdbb1ce21', timezone: 'Asia/Kathmandu' },
  { id: 'ae7cf961-ecb1-4f74-99de-dbc54d84e933', timezone: 'Asia/Khandyga' },
  { id: 'd0de74a9-8a81-467b-9378-1be2b0a3b65f', timezone: 'Asia/Kolkata' },
  { id: '9ffe6ff6-7640-4394-8e4a-28e86e0512f3', timezone: 'Asia/Krasnoyarsk' },
  { id: '56b73293-02d5-4591-b813-c08dd50a99c9', timezone: 'Asia/Kuching' },
  { id: 'ddbdd053-b917-4350-9ca0-28c46d4dc4d7', timezone: 'Asia/Macau' },
  { id: '946dcf54-0deb-4648-9df9-8fff04062a6e', timezone: 'Asia/Magadan' },
  { id: 'e1298004-68ee-4b3a-a36f-7e41ce69e592', timezone: 'Asia/Makassar' },
  { id: '59df1ae2-9ec1-4dc5-899e-09762b1e4eea', timezone: 'Asia/Manila' },
  { id: '25da1585-3ca0-4818-b368-c07a307e711d', timezone: 'Asia/Nicosia' },
  { id: '21b93a5c-e4c6-4a45-a241-3b63dc428489', timezone: 'Asia/Novokuznetsk' },
  { id: 'd8a17940-ee40-4e58-ab26-3db01848c8bf', timezone: 'Asia/Novosibirsk' },
  { id: 'b06e531b-00e8-41c0-8aec-2806fbd6a1b3', timezone: 'Asia/Omsk' },
  { id: '430bfc1a-a305-4eee-8a6a-8c1debac5aeb', timezone: 'Asia/Oral' },
  { id: 'cf2c390f-337a-4262-a3d2-bbe088740270', timezone: 'Asia/Pontianak' },
  { id: 'c7f07697-19cc-4431-b003-1ecbffe7f9d2', timezone: 'Asia/Pyongyang' },
  { id: 'c85dd6e0-4bcb-415b-8f05-10c0e097bb0e', timezone: 'Asia/Qatar' },
  { id: '52962bbe-51dd-4bf8-9508-aa218b069916', timezone: 'Asia/Qostanay' },
  { id: 'c51b5b72-90b7-4ef9-91f0-7fe2f9b7401e', timezone: 'Asia/Qyzylorda' },
  { id: '82151442-5d9c-4914-8228-aa17b7eed1ef', timezone: 'Asia/Riyadh' },
  { id: '1c388153-1508-4a50-9616-524e270d7694', timezone: 'Asia/Sakhalin' },
  { id: '50288ed4-8a88-424e-a1f9-0b04b7da2403', timezone: 'Asia/Samarkand' },
  { id: 'bcc4f1f6-d691-403a-b5cb-670fa19cdf06', timezone: 'Asia/Seoul' },
  { id: '1c5b636f-8505-4ad2-97aa-2397e470686a', timezone: 'Asia/Shanghai' },
  { id: 'f07d21db-a5be-4e64-aa30-3571b505260a', timezone: 'Asia/Singapore' },
  {
    id: '802b480e-b836-4745-8391-d69b5d971500',
    timezone: 'Asia/Srednekolymsk'
  },
  { id: 'b7a7c06f-ccd0-4ba6-a5e5-54e50cffe86e', timezone: 'Asia/Taipei' },
  { id: '107a7778-01d8-4dd2-a2dc-6685e810485c', timezone: 'Asia/Tashkent' },
  { id: '10a90f6c-f682-45a5-b6ef-be12cecb9061', timezone: 'Asia/Tbilisi' },
  { id: '965daf05-c0f9-49c1-8f68-7ab958b8be42', timezone: 'Asia/Tehran' },
  { id: 'cc48fb98-4718-4c25-952e-3bfcac8e56e5', timezone: 'Asia/Thimphu' },
  { id: 'c2ec864a-7610-4b69-b9ff-caf8726e88da', timezone: 'Asia/Tokyo' },
  { id: '69dd6bb9-9f5c-4e9c-b511-29ebf2e3d7bc', timezone: 'Asia/Tomsk' },
  { id: 'd441b6c7-4bef-4fa9-8991-bb0fd06533f6', timezone: 'Asia/Ulaanbaatar' },
  { id: 'f6c349a9-6441-42fb-ba97-ff3b11349eae', timezone: 'Asia/Urumqi' },
  { id: '7be0f755-8c45-4266-b79d-cd4164e33f00', timezone: 'Asia/Ust-Nera' },
  { id: 'fa2600c7-5bd4-4455-a945-877bd1e191cd', timezone: 'Asia/Vladivostok' },
  { id: 'e7440c90-7115-4832-922c-dc74674f5683', timezone: 'Asia/Yakutsk' },
  { id: '662635b1-857f-44ae-886a-f766f592fbde', timezone: 'Asia/Yangon' },
  {
    id: '442140d5-5548-4fa6-85a3-f2f13602da1e',
    timezone: 'Asia/Yekaterinburg'
  },
  { id: '1aba9385-a78e-4892-9ad5-e5cfc830470f', timezone: 'Asia/Yerevan' },
  { id: '90f7f4de-a9b1-4da9-9a8b-441bb9162432', timezone: 'Atlantic/Azores' },
  { id: '5bee9724-eb4e-42e8-8756-4694e4fef20b', timezone: 'Atlantic/Bermuda' },
  { id: 'ab2b285c-0626-4d81-92c3-c9aad84bf21c', timezone: 'Atlantic/Canary' },
  {
    id: '1762900b-6dcd-41b3-a78d-217308aedf00',
    timezone: 'Atlantic/Cape_Verde'
  },
  { id: '2ec3005c-2b1c-4434-9504-c976a5d66499', timezone: 'Atlantic/Faroe' },
  { id: '8a67fec9-491b-47f9-aa88-c9d928a2da85', timezone: 'Atlantic/Madeira' },
  {
    id: 'f0f07949-f168-4690-ae03-785bfe851869',
    timezone: 'Atlantic/South_Georgia'
  },
  { id: '3283eacd-1683-49be-9ef5-f97b93236ac0', timezone: 'Atlantic/Stanley' },
  {
    id: '61fb71a5-2c70-47a1-bfe7-86a62c631729',
    timezone: 'Australia/Adelaide'
  },
  {
    id: '66ecc017-ad50-4d8b-93ba-540ebd10a58e',
    timezone: 'Australia/Brisbane'
  },
  {
    id: '82aa4789-c00c-4175-abb4-38f9c6b508ff',
    timezone: 'Australia/Broken_Hill'
  },
  { id: 'fe6cce1a-0652-4cc0-92c3-28f56a9fa20d', timezone: 'Australia/Darwin' },
  { id: '7bfa0981-791a-4af0-9711-260c97589667', timezone: 'Australia/Eucla' },
  { id: '47844dbf-6f14-4192-a286-42c516c8dde0', timezone: 'Australia/Hobart' },
  {
    id: '32107618-cbac-48f3-8b69-b0faccb0bec6',
    timezone: 'Australia/Lindeman'
  },
  {
    id: 'c303c18a-9dc6-4497-ac76-8595e19925b2',
    timezone: 'Australia/Lord_Howe'
  },
  {
    id: 'cc84d86b-573e-49bb-bd99-855898cbaa89',
    timezone: 'Australia/Melbourne'
  },
  { id: '232e9955-ca54-46ac-9e1d-f283a3f00e12', timezone: 'Australia/Perth' },
  { id: 'd27b968c-6a6c-4415-a01c-574771d75167', timezone: 'Australia/Sydney' },
  { id: 'edee434e-45de-4a91-825b-a18d113fd4ff', timezone: 'CET' },
  { id: '347452ac-bcc2-4e7c-bbf2-1eb275bb7915', timezone: 'CST6CDT' },
  { id: 'ea3a92ac-c387-49db-abe8-263f90baa3b0', timezone: 'EET' },
  { id: 'b0bdc7a0-443f-4fca-947d-fc957f1a3435', timezone: 'EST' },
  { id: 'fc8a9711-a43b-4fc6-8693-275468b6a067', timezone: 'EST5EDT' },
  { id: '00ee0f1b-f92e-47bf-99c7-29d596a9f797', timezone: 'Etc/GMT' },
  { id: '77f6b22b-5610-47c7-9f4c-206e593b6d7c', timezone: 'Etc/GMT+1' },
  { id: '91d1be02-3ef8-41e8-809f-d02cc866a69a', timezone: 'Etc/GMT+10' },
  { id: 'dc4ee064-4c9c-464f-9b2a-14388b433154', timezone: 'Etc/GMT+11' },
  { id: '143cee64-3a81-453c-a429-26b0ce62625e', timezone: 'Etc/GMT+12' },
  { id: 'd99b87bf-8fad-4c0a-b7c7-511b81f593f6', timezone: 'Etc/GMT+2' },
  { id: 'bcff2085-514c-4643-a6f3-56f8fa68d190', timezone: 'Etc/GMT+3' },
  { id: '32a2bff5-fae5-4fdd-9373-8bfdde391ed7', timezone: 'Etc/GMT+4' },
  { id: '1cbf940d-95f1-407b-85a2-39602204883e', timezone: 'Etc/GMT+5' },
  { id: '33f892d0-2df0-44f4-824c-10cc4238f494', timezone: 'Etc/GMT+6' },
  { id: 'db1c80ee-daa4-4ffc-9c49-e3112bc3ff2f', timezone: 'Etc/GMT+7' },
  { id: '73d7f1b6-1fc2-4dbf-89db-8c66327fe29b', timezone: 'Etc/GMT+8' },
  { id: '83358d14-fc42-487d-b345-7ae25a8c94d4', timezone: 'Etc/GMT+9' },
  { id: 'eadea1e4-fc42-4788-b12d-4c45306a40a9', timezone: 'Etc/GMT-1' },
  { id: '42743873-8669-469c-9f09-4024eaac527a', timezone: 'Etc/GMT-10' },
  { id: '70618e65-bae2-43ea-a9f8-0ee4aeef3d50', timezone: 'Etc/GMT-11' },
  { id: '9c6ba622-d93b-44e5-b057-1d761f4d316f', timezone: 'Etc/GMT-12' },
  { id: 'f3a52481-2b8d-47d0-8320-a075bf0d9149', timezone: 'Etc/GMT-13' },
  { id: 'fa518669-e91a-48f1-b295-5a2d9a19cb7e', timezone: 'Etc/GMT-14' },
  { id: '46c5929c-d998-4dce-b86e-505150e0f8d3', timezone: 'Etc/GMT-2' },
  { id: 'a7991812-971c-4c15-a659-3d077fc6466a', timezone: 'Etc/GMT-3' },
  { id: 'e11a6719-a28d-4f21-aedc-00336cac98f3', timezone: 'Etc/GMT-4' },
  { id: '580b65ca-d38e-4f25-a3d7-f376a3e791d5', timezone: 'Etc/GMT-5' },
  { id: 'd3de168e-0579-412d-b884-72939307752b', timezone: 'Etc/GMT-6' },
  { id: '3b81751d-13f3-4ddb-b35f-0f7a0960295e', timezone: 'Etc/GMT-7' },
  { id: '4e71106e-8b75-41f2-809a-0b6206dafc76', timezone: 'Etc/GMT-8' },
  { id: 'ca13e609-3d01-41ef-9cb1-679aff096b78', timezone: 'Etc/GMT-9' },
  { id: '5d80230b-c5e7-4dce-a3f9-8ac628da695b', timezone: 'Etc/UTC' },
  { id: '9dae3c5a-cd96-4213-aec3-924840ac4fff', timezone: 'Europe/Andorra' },
  { id: 'cbf76dce-c82f-4d49-a415-df0f59b51403', timezone: 'Europe/Astrakhan' },
  { id: '64859c19-ffa9-47c9-ad99-da7f59c0d37d', timezone: 'Europe/Athens' },
  { id: 'b157780a-d54f-47d0-b214-f18ed61b90af', timezone: 'Europe/Belgrade' },
  { id: '21945ee8-7f15-4025-9004-e2b3eed8c127', timezone: 'Europe/Berlin' },
  { id: '83d0fb8d-c8e2-4b5e-9ff9-56ec11dcea95', timezone: 'Europe/Brussels' },
  { id: '049e768b-e0f4-4099-8fe8-2df2f3eba1fb', timezone: 'Europe/Bucharest' },
  { id: '9029fb9a-afc6-4888-9e8a-55bd6be46aa0', timezone: 'Europe/Budapest' },
  { id: '492c101f-06ad-47c0-9259-a0c7bb72fe02', timezone: 'Europe/Chisinau' },
  { id: 'f9926c83-8960-4185-b13f-e44672bdda33', timezone: 'Europe/Dublin' },
  { id: '45aad034-7075-412c-ad04-2a4c4256f686', timezone: 'Europe/Gibraltar' },
  { id: 'ef4d145b-9079-4eb4-9746-d3b131acd8c4', timezone: 'Europe/Helsinki' },
  { id: '438ebba9-7341-44f0-93d6-92d443f4f9e2', timezone: 'Europe/Istanbul' },
  {
    id: 'ac559112-cd11-4972-949d-695574dd9688',
    timezone: 'Europe/Kaliningrad'
  },
  { id: 'e3b8ec88-5d5b-4fe8-abf0-6d0e4c08bb96', timezone: 'Europe/Kirov' },
  { id: '258028bf-f40c-43c9-a562-7bcaae4cea9f', timezone: 'Europe/Kyiv' },
  { id: 'ea22997b-beea-4d7b-a7b0-9d38593f5ba5', timezone: 'Europe/Lisbon' },
  { id: '24a1e5a5-c0fd-4f00-9586-98f7ba1630f4', timezone: 'Europe/London' },
  { id: 'e098b79f-39eb-4f36-8521-1b1f53030c62', timezone: 'Europe/Madrid' },
  { id: '637c45aa-23e6-49ef-901c-eaf7e5a3564b', timezone: 'Europe/Malta' },
  { id: '68d1705b-e99b-461e-9bb5-e86056d6491c', timezone: 'Europe/Minsk' },
  { id: '8314f8e5-4f7a-482b-8d1c-4888b2e25421', timezone: 'Europe/Moscow' },
  { id: '3f357f80-e4b0-41b0-9528-d0cd0cf44a94', timezone: 'Europe/Paris' },
  { id: 'e446b6c3-9686-4843-8c1d-2204b50f8845', timezone: 'Europe/Prague' },
  { id: '982bf384-efd1-4d68-9ff1-dee89462b6a6', timezone: 'Europe/Riga' },
  { id: '52512972-c9c7-466a-915c-48cfaff2ebd0', timezone: 'Europe/Rome' },
  { id: 'e10eedd5-068e-4af9-b13e-8a3698cbaf8d', timezone: 'Europe/Samara' },
  { id: '7917318f-9219-40ac-ad97-897088bacca0', timezone: 'Europe/Saratov' },
  { id: 'ec362796-560d-4e09-9cbf-aeef3acb489a', timezone: 'Europe/Simferopol' },
  { id: '1dfa5f02-8439-4193-ae55-139c6fce6ace', timezone: 'Europe/Sofia' },
  { id: '007e2e61-c957-4bad-85fa-f6fff9704ff0', timezone: 'Europe/Tallinn' },
  { id: '3c722870-165a-47f7-b1ff-f26b331f0d65', timezone: 'Europe/Tirane' },
  { id: '14a760cc-5575-4656-8235-018d45ed1fb0', timezone: 'Europe/Ulyanovsk' },
  { id: '330cfc93-a789-46c3-8888-2f5fe40fd903', timezone: 'Europe/Vienna' },
  { id: '503fcf54-e534-403c-977b-db1ae0bb7304', timezone: 'Europe/Vilnius' },
  { id: 'f3956818-c269-4f3f-97e2-45e2f0747c4c', timezone: 'Europe/Volgograd' },
  { id: '5655aab0-a25e-45ac-a36b-8455c91bc1b3', timezone: 'Europe/Warsaw' },
  { id: '961d1f74-8266-4a16-bccc-d6ff20432441', timezone: 'Europe/Zurich' },
  { id: '46d91f06-2e01-4201-8e25-050277bacb84', timezone: 'HST' },
  { id: '489b4c94-5ded-4603-b744-fe95103fd61e', timezone: 'Indian/Chagos' },
  { id: 'e787274e-4057-4063-b2ac-1d699d61ddcf', timezone: 'Indian/Maldives' },
  { id: '589c8cd7-4acf-4fa4-8124-237729994699', timezone: 'Indian/Mauritius' },
  { id: '7a296e3f-8275-40fb-8994-91c40237979c', timezone: 'MET' },
  { id: 'c40553da-2b56-4ba1-b388-54040d7a34a9', timezone: 'MST' },
  { id: '58547bf6-4f10-4b14-8514-9609fb2ff94e', timezone: 'MST7MDT' },
  { id: 'e38ef6a4-19f9-4301-b046-b40b4eab09ee', timezone: 'PST8PDT' },
  { id: 'fa5dc95a-679a-4e42-9d21-5e9f7c64ae30', timezone: 'Pacific/Apia' },
  { id: 'a89a0fbe-e2fb-439d-bd73-0a65d6e931a2', timezone: 'Pacific/Auckland' },
  {
    id: '91625409-8624-46f5-a802-22794ff14f29',
    timezone: 'Pacific/Bougainville'
  },
  { id: '1e997961-bb3a-4edd-9561-14c292c4acea', timezone: 'Pacific/Chatham' },
  { id: '14d8a355-679b-4adc-9052-86a28128024a', timezone: 'Pacific/Easter' },
  { id: '932d1fec-bb2a-4a59-a185-ac35198d4a48', timezone: 'Pacific/Efate' },
  { id: 'ca4844c5-5aa9-4303-8278-bead4b4146ee', timezone: 'Pacific/Fakaofo' },
  { id: 'c86a47cb-f116-4282-abdf-a005ac045403', timezone: 'Pacific/Fiji' },
  { id: 'd5d8846b-b2f0-483b-8b4b-863fa33800e7', timezone: 'Pacific/Galapagos' },
  { id: 'b4768575-83dd-495c-a8c6-03133c8aadf1', timezone: 'Pacific/Gambier' },
  {
    id: 'ab900043-1535-417c-9287-c3ce38b3cb97',
    timezone: 'Pacific/Guadalcanal'
  },
  { id: 'e46fb9d9-0d65-41b2-af3d-ebcc23e1dfdb', timezone: 'Pacific/Guam' },
  { id: '6e2051c1-4de3-41c6-9a2f-7b3b8966f2fc', timezone: 'Pacific/Honolulu' },
  { id: '2414c745-7e8b-4d23-9b6e-989adf0b910b', timezone: 'Pacific/Kanton' },
  {
    id: '65663de1-09da-410f-a027-9a6fe17fde41',
    timezone: 'Pacific/Kiritimati'
  },
  { id: '4ced905b-c6c1-45e4-82e3-29f696e6d402', timezone: 'Pacific/Kosrae' },
  { id: 'b2b0b0a9-35a7-43d8-8e2d-553b79db1cb4', timezone: 'Pacific/Kwajalein' },
  { id: 'aa381303-55af-4f89-b1d1-d2c22fa7d0d1', timezone: 'Pacific/Marquesas' },
  { id: 'db718031-b827-4fbb-8bd3-d6b594fc9dde', timezone: 'Pacific/Nauru' },
  { id: 'b2d3c3b4-594e-4898-b822-88ae46c80621', timezone: 'Pacific/Niue' },
  { id: '3eddc6e2-514a-4e96-8c03-568540bca855', timezone: 'Pacific/Norfolk' },
  { id: 'e24de304-471a-41c0-8fdb-35f768144de7', timezone: 'Pacific/Noumea' },
  { id: 'cc4becd3-b380-41b7-972b-e662d06b348e', timezone: 'Pacific/Pago_Pago' },
  { id: '47f4cea2-68f3-49b9-b04e-3f41fac6ea90', timezone: 'Pacific/Palau' },
  { id: 'efef609d-b412-4e99-8303-a2221d6cf0da', timezone: 'Pacific/Pitcairn' },
  {
    id: '988b8436-877e-4298-913a-190862229a5b',
    timezone: 'Pacific/Port_Moresby'
  },
  { id: 'd9f3f5fc-fa9d-4855-944f-87b54858c260', timezone: 'Pacific/Rarotonga' },
  { id: '960f234d-7c45-4e2c-a2e4-b8269ce0181b', timezone: 'Pacific/Tahiti' },
  { id: 'aa66183d-1b0b-445c-83ba-2a3df62c3433', timezone: 'Pacific/Tarawa' },
  { id: '65352bc1-f3aa-4f98-bb72-e44c67b7c9a1', timezone: 'Pacific/Tongatapu' },
  { id: '90562e0e-f897-4cda-a480-d5c72a001677', timezone: 'WET' }
].map(({ id, timezone }) => {
  const name =
    `${timezone.split('/')[0]}/${timezone.split('/')[timezone.split('/').length - 1]}`.replaceAll(
      '_',
      ' '
    );
  return {
    id,
    name,
    timezone,
    offset: renderOffset(timezone)
  };
});
