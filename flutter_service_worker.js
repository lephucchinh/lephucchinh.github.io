'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "3e8deb514b42cd27d9fb452376fcccc3",
".git/config": "acefea1dbf98ac0c701a37fea1802138",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a1476cd53368c4f2e4924be3f41d0d29",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "91da5aae612d2665203658a3fd446564",
".git/logs/refs/heads/main": "3b44b61dbf9808de8b694675866904e7",
".git/logs/refs/remotes/origin/main": "30a8f2a020b9a8a9cbb89b7815d26821",
".git/objects/05/86224f701656e1d5831692f103ab5ecb59b4ec": "161b3e312ae5ed139dd2e60f42b147ab",
".git/objects/08/896b1101843a6bcd4e52f9b208d1ed9e8129dd": "1a9eb81a92c51fc7d1a00b93a2c7efe0",
".git/objects/09/a5c281650e6bbdae0a2598d3acdca8342078f7": "0d639d2b322c67b9a291f497ebd7b1b2",
".git/objects/0b/1d44bd899816d51656128c4afa0a9b85d3ed86": "7d4b534011b09ed2608e92b986b84ce9",
".git/objects/0b/9ae5f66ce8b309da10bae22f90be750372e624": "82a0c56cd345e9b42fb577d60ca33c4f",
".git/objects/0c/107bb18cea97bb5ee6651c4b86e69f91e31114": "442a197abdd6e10e2b3e67e90586f174",
".git/objects/0c/d9c7ef326909e72596df50441daa04d8f5c869": "da0c4630f6b25578ca02a799a9fb40ef",
".git/objects/0d/bac31bdd38768a01941617ee68a49d8d765772": "63e59bc0671a5d70bc0b16d4bc84073a",
".git/objects/0e/23c23563fee78ff7a59edfa9d08db09c887a23": "8336a17406198d77f9ce38e18b064f3b",
".git/objects/16/e3a784281a79f1e6587e0029a34864e20e5db0": "b5fc67b3401911ee6269f8051af1030d",
".git/objects/17/2a374087e853992bd6cf35d6651da4b58211cd": "acc7b4b5131d0e666a888c1205b568fb",
".git/objects/1f/1270192b6d811b10c28cbc86ea2b6c23527954": "3961b1e5b41079537631c050cbf56625",
".git/objects/1f/5dd03013472902801bbe50dfebb9ae06efd010": "ccf2ec6cde2138165fd43fdcd73d4664",
".git/objects/20/e2109008c7985115bc1ac78a61aaea04d3155a": "107960823585c476cab6022c2ee75aed",
".git/objects/21/d6c85a0df5429f9f82c43fb2d174d449ed3095": "2ab2f7be7f3781b2fd6ba6ac5753ac28",
".git/objects/23/83a5b12d313ccd5168224d8c468f6abd17609b": "0cfa20cdf41b091ecae6be8a2fce21b6",
".git/objects/24/d6c33eee3b8cb1993ca67ff87fdb4a74b81742": "d83405c98539eabcf67a962c62e0df1d",
".git/objects/28/2c9dca398b62d8e81efcfc4d15f0d5a3f57c60": "f62e69bf1eba7f69e6d0a6cd4a9d2daf",
".git/objects/2a/4d4739e9f70a58b092d422f1604991faf1897f": "7af9201e118a94a9fba1128fc5acf508",
".git/objects/2a/e76c6ac5183ac9022e44b376872635e2b6d25d": "fb50a77403ff9a196e94bb83c1fb1880",
".git/objects/2c/03f5cfa39c3c45a5877b91920945af22895b55": "b79c33d9e2a16ef1c8e7ead94520a201",
".git/objects/30/9d9d071cdb8589e7b0cdf42619cf6a8b566319": "0328404986fdec47066a6087f6724bad",
".git/objects/30/a4caa5af17973091690d44cfcd8fdabfa915e8": "e47e80eaa06f3df859d529f0f602f637",
".git/objects/30/d57d411d8fb4a097b06d28712593bd364ed9c1": "27ffd6af65d2685563f1027d9e39ed1e",
".git/objects/33/2ee7b742d87d05ddb05687f68efaf1404d81ad": "e9193951465bb73312ccb052442e8e7a",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/0c4a440151f8cc9c8170a80fbdc01b719d7e16": "159a84f36e5a5a28643a8067e0eb129a",
".git/objects/36/33c3ea98d698b5edac63222263ffacc27f2632": "38e2050e27c2a8d3ad8b6d058304b080",
".git/objects/36/970b3fabf48974b39b32fcb621f4a358b72e1e": "30798bb7072d73d1e48f473a2aa95162",
".git/objects/3b/59c509587b5f15bbde61ca1369471c6d85451f": "66abdb358ac057bb36d02faf98e14f21",
".git/objects/3b/745df62ed7448962544c0feb37babffb59e5b5": "449226eadac3fd7cc511178ff37afcaf",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/b4e3438983c733a31a2d763407f887486b7322": "7081c025a9af92fb09f89c578ec21187",
".git/objects/48/6ee575ae750b97517faf393fe338fd70fa9d20": "092ae178eba40f55399ebda612dd15da",
".git/objects/4e/c7775d126ac8f1b277cec5e79b32377329f8c6": "d6e21ca22eaa0acf712129156c7a464d",
".git/objects/50/4ad26ff78df20b8eef6ff856299a93f8b0432f": "a2bd2862d8a4411a9478f68a8ed0b054",
".git/objects/52/aa71c549692c051519baa1a2b29a67aaedefdd": "933577fe056bd3e0ee6bc7ee93db3758",
".git/objects/53/01bce028bf218a3c66f28385f8d6db374f3b4e": "14bc5213a22161db38c99dc59de00f7a",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/56/81f0a59c81b9be998cfe7bb5e07cb9ce300177": "92235e1ca748461dbce3c541604563fd",
".git/objects/56/a9f35707aa16383739ab23d77c7140e75ec94f": "db1e4f21d3a5f7ce0e52d61531ffaf02",
".git/objects/58/809c995e4ed7c10c5a0291b4ce29ce58f61e86": "5d731836ea3e6e878abeda8e75de1b22",
".git/objects/5a/728525e45a95a928abe84d1631f02745ac732f": "c9603a6e76b1871ac81f540face7882b",
".git/objects/5a/7be9f0256ec5d64b55d89746f987f488441708": "9b947844754cdb33993d7287f761bfce",
".git/objects/5d/6ac2720abb50122add06f4579372d9788fd5ce": "2b0988234b712be69814c418e0c9ba1b",
".git/objects/61/97e9b82f5580f84b7c2fb450c3d04b31a430dc": "974894523a0250b7ca212c8a67d4a167",
".git/objects/65/645df59670b3305b31d15cc73bbf491954b5ab": "2578c1e2d33fcb4559eee678fd696506",
".git/objects/66/f783e262412fdadda74a6ee98c10e46a98bcd8": "30d1aa96fc3b5797e045616541061118",
".git/objects/68/c1ab6aa265aa261e28594b34d1883cab071014": "249a745f1538125edef6ba35de77c0ee",
".git/objects/69/7e1ceff955859e58ecc1851fa7dd7387c74742": "0dffad748c009e6ad5da901f3067142a",
".git/objects/6f/a31536a09d619aac83418f31db62570fcbbc16": "04e5cf9070651ce5343a9d663e021d91",
".git/objects/76/c1ef4e735f3b60b4a63ce9e2b4bcbde9206054": "d7aae64c3b4147557c5289d906a94f76",
".git/objects/76/de09c3542259f516008ce525e8702588b5452b": "60473cacc556e439b12d7194ff86b7c0",
".git/objects/78/084c8419d27ba34731a07532f83e54ac6503a8": "c3b9ee536dc08012a53b8de7c2c7d313",
".git/objects/78/10f222a372c89e99fde08605692431af15c95f": "0907d64891de9f0ad06dc5da57c41519",
".git/objects/78/6975d9dad164ced8c0d2d98752324a16e634c3": "93b94dbb6b5f53d68dea89cd1e4746c6",
".git/objects/7a/19e8603e87d361acc57c42c29716bacdcf5ee2": "91a855b4ccc8e2f32bb7be99e946021a",
".git/objects/7c/9b4cce3b09c2d18a6b1f53efe7739edd645905": "e439ae61d6895b7caf51ef66b9df5a8f",
".git/objects/7d/4b5ec42949a5a85d08a303f57fc9fcd35a3f1f": "5998864e3ee314402fc7320fdc9e7b33",
".git/objects/7f/388efef0b6674d26852a8f3ee8e3ba320b9b73": "c384886b911f263d746e128d7a414a76",
".git/objects/83/6a32edacff7c1259776069c93acead52418781": "2d3179db00f7debf2f441027f2817bca",
".git/objects/84/67fb78b227bf0aee8582fb0d8d739bc184fc3c": "f479b3226fd548e3ec8d34553b052244",
".git/objects/87/40bbdf93c32173c431e80a09e12f535f75516e": "976fdfbd6d2904bc65ca269d11dedd60",
".git/objects/88/854fb5203d80eccdb2c4c012eb1e52a8ffacb7": "dcbaf70c6ea136da84e32edb56bab6c5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/1aea6c42b14ac5d35eb75302c40ddd7d1ef938": "7db11b38bd99d2c35f097dffa206fedd",
".git/objects/8a/95f6c6ec2a2cc0bc40d088bb1e0b7756903a3d": "abc22c789e49901d136b9cd6829219cd",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8b/9515161ff5f4cea13e1799444b4bc471d293ee": "8ac4b8388e191d038116fff1c63aca22",
".git/objects/8d/df39a4b0cea06c4e10b755ad7a7f929934c098": "e91b0e22bb45e67b3b6b173133332151",
".git/objects/8e/872e5743d2166297d0485acd542fac1457ab03": "b2944df89e2346c8e43c9677dca9b134",
".git/objects/90/612089577c23918a0431a32225ee18e60830c6": "4ef42e94823debcf00db85aa9c867d79",
".git/objects/92/ad403ee1f0e98bce0c96682d6833d52779026f": "e452a3bd4d02305e73a50a6f1e94d76d",
".git/objects/93/5f465f9238eec7a375dbf16c6766a610f37126": "6ca47ba1fc36f2be11572b5c9341551a",
".git/objects/97/769f0c739a33301600035fdd08fa39b9ded086": "58cc4b6d320aa1ae15d3c10b0b708832",
".git/objects/9d/472c10f89d253d44fdba9fabdd8ac2390bb955": "03742342ed5acc2ee8ed0dad4576fd0d",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/a3/5bd007e2f97d761a58d96edc42a1520c93133c": "9adfe8d8f637ffaba31ed7df21aa70e2",
".git/objects/a5/d897d812cd6fe8a2c4244a598e1291c4a9012b": "152b08b57384753d194e6650e376f20d",
".git/objects/a9/a3559782083036927bb01f78ebdbbe08cb34eb": "5122f268169af4d7ef74817b21da2a80",
".git/objects/aa/63e0c69a03f6efef7fb9274836c874f0f1e2cd": "48243b647853c8e43056d30d7d40e624",
".git/objects/aa/a237a9ba611fb752f3f37819c7b0f9177a93ce": "12e08998de285c95ca590040897a4a42",
".git/objects/ab/414065ab0a5a2c87220d2ecb4b4f7c415dad9a": "5f2d710ce3bc2330c6921ab313c27bd7",
".git/objects/ae/8f0886cd0a022e8ada27b11e3dd16e93ae4357": "c3f2a3a472f820668e2aba59491613f3",
".git/objects/af/f528b34b289b6e0b07e5c6c69ee0b8256ac1b5": "1ab08ae6f1fa3a370b166b262a54be31",
".git/objects/b3/134743694cc70fb616d05d4f03d9661ff22961": "4ec46115c108443486075a6d4e1f9a11",
".git/objects/b3/9fe5e081f0a74e96a81ec02bea5d1714f94eaa": "cba16cf94bd91b08deea46581ca12794",
".git/objects/b4/816aa30260da62e238cebb392922b2a7248399": "d2b9f2ff53edccdb388da587d0e1632c",
".git/objects/b5/5a9c1d9be4fb95583f6ced7feb3ea0cfdcaccd": "451ea3ad4650221f8704d3bcc13e4736",
".git/objects/b6/5fe8640fb5f763637c626f22124afda4b78611": "eabf262ea1c20c51250d706c4142def1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/d1db2b9458c354044bcc898d3abd471b02f895": "b3ae92f15fc3d082dbfc4971404d23aa",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/8e9929d7dd94805e8dac9516bee6e9c4a4fccb": "3b62d6bd1cd5e4f5bb12ff9cb1b33e8c",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/ffb54165dfa322a699c6a0e538a7ed65306848": "213082e7c40cce90eb06a167c5f15e7c",
".git/objects/bd/3f6723a9e9aa4b37cff95adb6da16025c48f7f": "2855ff0d19eac0a3b7bc1361eae467a7",
".git/objects/be/e7b82955ed77eb2aad4be567ae815e7af44196": "9dfcfbc3d7f6147cb8371f78b458c233",
".git/objects/c1/4a4fabda8720746d3f52f7e6f65493b4746865": "21a73ea120185f2f131dce2043276d3a",
".git/objects/c2/235617b29232ffee809dc98329a9aec0facf63": "7270052a23fe9d68540c9c7b38131d80",
".git/objects/c6/0bf3555e5a46947bb129401dc1780349dc9f7c": "4c0af88e2b0ab24aa68ea88592188fe7",
".git/objects/c6/5d4865502f27e74b9df92d94593a6c861eef3b": "09345c052b0f61ad699e14331e184e15",
".git/objects/c7/c09f26f72549065652c2af836bd9a9fc8eba6f": "5dc59a0d6d1e393bda014f22a8f8c609",
".git/objects/c9/0f9557aceda01e1a9be31fa3c60bcdd290721f": "50c4ffd529a332307c6dcc3f91feea56",
".git/objects/cb/0fb901b1c0a6a103e8383c917b1fd92307461a": "0551bfa631e7155d405c4dcd2cc0754d",
".git/objects/cd/b7b724048be1a939fedf06b15a146bf514178d": "3d1bee1c704a457f9cb510d693add525",
".git/objects/cd/eb5de4bc694a34a9e46ed98a04be63005573f8": "7f11e10dd3ffaf65c39af32e5f9c395b",
".git/objects/cf/82c55ad45b0994462e52760d4faa4d60250323": "e04053d07260a005dc1a20482e004f1b",
".git/objects/d1/be82bc43a335961540c11990e579519f7d5861": "7dde1577a66624be5bd5d78c08fa05fb",
".git/objects/d1/caf5f562ec129642c463fa707d49fb0aee0023": "7edc0b636a6b230f5b84ce76a41ff142",
".git/objects/d3/0174aade7a1ad60a096e52f4ae164aaf351627": "8353374295414b5f032a96fee2d77b3e",
".git/objects/d5/87d928f37d473a7235d1007950ac46da8f784f": "cd3a621af64c872917ad4aefa3e1c666",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/40625499ac13d36bc1724908d55c675ffd0c40": "41ac34b8dffc0dd71aff4fde0b63da00",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/da/223470a6c9b688833b8f520c1106a938ac3abb": "706c9fcb74b58b4674b28dbba8d4c45b",
".git/objects/db/2447f9b98926f164de3aa7825e831c66ccae63": "678acea339453203f1b381a8f2132dfb",
".git/objects/de/2594e1c60be5d817f30ed8089a4c574978c8c0": "31e842e9b90a13980bc95f158ae14d8a",
".git/objects/de/622976f970e279faab4eca452fe98bc66127db": "65d73bd350ac24d0c03ee32794c750be",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/df/a2d1b02a45a69b196f36a3b5127db7133e88ac": "7e157e75068753535d1fd61c7dc858af",
".git/objects/e1/f6b2e58982761cf7a07a43f13f69e547c9915e": "5289891b36e29f965f8ac172730081ef",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e6/78dfd8cd712e678f9459909602e1db9ab21d9c": "7f4892b68ee201ab7a0dde781152d115",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/0f8beffd2ca17f8178397c131685f73922f5cf": "4020053c3552d3c679f752967a6b3a46",
".git/objects/e9/499b141eb46db532ac9253d828c69999b6afce": "444650a69d10c196223bc0a873945675",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/d6c32b9e7efd8e06b3a74184441ff3286efa13": "e62dda8b54f114ebac2e33349602a4d6",
".git/objects/eb/f2c30603de27432e90893db43b0d558b866b23": "0395e08b7a503bf4463c38d83a0e195f",
".git/objects/ed/bac3b0506537b48ee543c904a2e326ee8680f4": "39397c1b757f8648bb67d29aac4d776e",
".git/objects/ee/7237024e35f7ff91b30c2e39c8fcd963764c5f": "09713ec45525316ec995f05b6dc50665",
".git/objects/f2/2ccedd4c4878ba8689abbef4c9269635662b98": "675d834b4921d9e3697d3bf430d9d06a",
".git/objects/f9/5a3767d8a803d48cdd38a8a7558002a006293a": "7e00789d04351985d0be7d3c18193ae3",
".git/objects/f9/64b121c772b61003d16749ebcf6ffe648963b3": "ff22805e25544b07fa1b35cb9b2ce1ad",
".git/objects/f9/bee1b9f7d3d3fd2d6f4e253ba9e342ec0d9f08": "9fd3d38e476a8646e2cced87a93c1140",
".git/objects/f9/c5c0e738948f2da5e234c85f440ef39f701c64": "1b8d24b40a81a08a7c85b73fde3fe8a9",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/b8c7313a5eeb192911f42e071f50ad70b957a3": "2b3e776c879aba9974dc87f5979ba6d2",
".git/objects/ff/4fe398233bb3c84e6a13abc91ab3a2fa33237a": "b3014931c7443ac0d910f12193ab429b",
".git/objects/ff/af4b25d88fc25c8a0ec87b41ebec090ec539c5": "be43900cf7bbe7f17f9d03372fc34aa0",
".git/refs/heads/main": "59cda7124a1856b70d36567ff2f601e0",
".git/refs/remotes/origin/main": "59cda7124a1856b70d36567ff2f601e0",
"assets/AssetManifest.bin": "e15c0a48b4c47ac9a34eef3260c6e4e5",
"assets/AssetManifest.json": "7ae5761d2220eb5b447189d2caa8d35f",
"assets/assets/images/analytics.png": "610a95aedc2c0c32d1316562dc8ec248",
"assets/assets/images/arrow111.svg": "f750170aaddf4e5f885a27d391a311d9",
"assets/assets/images/arrow211.svg": "9070490babe4d1aa7f077b104555b363",
"assets/assets/images/avatar.jpg": "850dda1ce87dcb60be803d6a8e652b4a",
"assets/assets/images/banner-bg11.png": "5f3ca49706055342e92708c7dd31849f",
"assets/assets/images/bloc.png": "47150288d26fdbd316bc92952121a9aa",
"assets/assets/images/brush-stroke.png": "41854d93cc2b183ac9bf55e4b5097846",
"assets/assets/images/coding.png": "af1b456dad3dd6f43f14994963b57316",
"assets/assets/images/color-sharp11.png": "d64094774a77a02c2c22356681131cb8",
"assets/assets/images/color-sharp211.png": "42c4dbf649597b4d4ceaf4c9792de60a",
"assets/assets/images/face.png": "3e569c0b44e18cf4ac36c2f52ca2c4fc",
"assets/assets/images/folder.png": "fd5bab3367ec2426c307e0068114928c",
"assets/assets/images/footer-bg11.png": "e9228c17c13a87653f1b8ed01a3ff306",
"assets/assets/images/git.png": "7b08b14f30c2110a685bafcd33e8a480",
"assets/assets/images/google_firebase_icon-icons.com_61474.png": "cf17e1ad447577d45b349f355d6179b5",
"assets/assets/images/header-img11.svg": "bfe6d1a6d579d73c0c625ec0afe2855b",
"assets/assets/images/icons8-c-48.png": "b8a1078d92d851db2364d5e405a0649d",
"assets/assets/images/icons8-flutter-48.png": "8efb797d33c586ef3cb71d4083dd1fdb",
"assets/assets/images/icons8-globe-24.png": "5c9dca8ca1ca49da147bc52fbf6d0d3d",
"assets/assets/images/icons8-java-48.png": "7013d3cd840b6bed9697daf954c4c3e2",
"assets/assets/images/icons8-matlab-48.png": "0997aec85736c3e419067a378bb038fb",
"assets/assets/images/in.png": "a65bf53ef6a1d1555120edfc1810f551",
"assets/assets/images/insta.png": "bd3f44e94e19e2cd2fed522e65f67657",
"assets/assets/images/logo11.svg": "d088d93cf0b893d29baf0993ef52c663",
"assets/assets/images/meter111.svg": "dea05c56b45857a24dcba5a23202ec70",
"assets/assets/images/share.png": "7d05af750cd03cdda7f247d7dc8b532e",
"assets/assets/images/twit.png": "3f2b027c50dd30dd9abeeaeb1b68b1c3",
"assets/assets/images/work1.jpg": "a3825d69086db7cb4e7d00ac5feb4f94",
"assets/assets/images/work2.jpg": "a2df7a096df770fc10df7483e3f39952",
"assets/assets/images/work3.jpg": "8847134ba9bf817f868c2f05ac109edb",
"assets/assets/images/work4.jpg": "29a7fea093846412c4e2b803edccd7d7",
"assets/assets/images/work5.jpg": "8789876babc73ec621a0eccac0019f9b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "1e363e399026f9975913934fe9b0d3cb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "3a0d2ae43a99e3a12b42d7f02eee8ecd",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "295c48350d0868f1aa1e85fb81ea2696",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d498288df90e449d0c95a3b6d7ffa829",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a96e4cac3d2da39d86bf871613180e7b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ad7ddd2f7edfec5d6848a74a4e15afeb",
"/": "ad7ddd2f7edfec5d6848a74a4e15afeb",
"main.dart.js": "d4f79e5140a2c0896a8d6d19d5d24127",
"manifest.json": "0834865cdc8c527af11193628df372a9",
"version.json": "ed4196a263a7919322bbf877a1c4ca63"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
