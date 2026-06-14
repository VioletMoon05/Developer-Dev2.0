(function () {
    /* ── i18n ─────────────────────────────────────────────── */
    var i18n = {
      en: {
        title: 'BLOCK LIBRARY',
        tabs:  { plant:'Plant Blocks', liquid:'Liquid Blocks', nature:'Nature Blocks', decor:'Decor Blocks', function:'Function Blocks' },
        none:  'No block selected',
        sel:   function(n,id){ return 'Selected: '+n+'  (ID: '+id+')'; },
        btn:   'INSERT ID'
      },
      vi: {
        title: 'THƯ VIỆN KHỐI',
        tabs:  { plant:'Khối thực vật', liquid:'Khối chất lỏng', nature:'Khối tự nhiên', decor:'Khối trang trí', function:'Khối công năng' },
        none:  'Chưa chọn khối nào',
        sel:   function(n,id){ return 'Đã chọn: '+n+'  (ID: '+id+')'; },
        btn:   'CHÈN ID'
      },
      zh: {
        title: '方块库',
        tabs:  { plant:'植物方块', liquid:'液体方块', nature:'自然方块', decor:'装饰方块', function:'功能方块' },
        none:  '未选择方块',
        sel:   function(n,id){ return '已选择：'+n+'（ID: '+id+'）'; },
        btn:   '插入 ID'
      }
    };

    /* ── Block data (3 langs per entry) ───────────────────── */
    var blocks = {
      plant: [
        {id:200,en:"Cherry Wood",vi:"Gỗ anh đào",zh:"樱花木"},
        {id:201,en:"Larch Wood",vi:"Gỗ thông rụng lá",zh:"落叶松木"},
        {id:202,en:"Poplar",vi:"Cây dương",zh:"白杨木"},
        {id:203,en:"Redwood",vi:"Cây gỗ đỏ",zh:"红木"},
        {id:205,en:"Walnut Wood",vi:"Gỗ óc chó",zh:"胡桃木"},
        {id:212,en:"Cherry Sapling",vi:"Cây con anh đào",zh:"樱花树苗"},
        {id:213,en:"Larch Sapling",vi:"Cây con thông rụng lá",zh:"落叶松树苗"},
        {id:214,en:"Poplar Sapling",vi:"Cây con dương",zh:"白杨树苗"},
        {id:215,en:"Redwood Sapling",vi:"Cây con gỗ đỏ",zh:"红木树苗"},
        {id:217,en:"Walnut Sapling",vi:"Cây con óc chó",zh:"胡桃树苗"},
        {id:218,en:"Cherry Leaves",vi:"Lá cây anh đào",zh:"樱花树叶"},
        {id:219,en:"Larch Leaves",vi:"Lá thông rụng lá",zh:"落叶松树叶"},
        {id:220,en:"Poplar Leaves",vi:"Lá cây dương",zh:"白杨树叶"},
        {id:221,en:"Redwood Leaves",vi:"Lá cây gỗ đỏ",zh:"红木树叶"},
        {id:223,en:"Walnut Leaves",vi:"Lá óc chó",zh:"胡桃树叶"},
        {id:224,en:"Small Grass",vi:"Cỏ nhỏ",zh:"小草"},
        {id:225,en:"Withered Dry Grass",vi:"Cỏ khô héo",zh:"枯草"},
        {id:226,en:"Sea Worm",vi:"Giun biển",zh:"海虫"},
        {id:227,en:"Purple Perilla",vi:"Cây tía tô",zh:"紫苏"},
        {id:228,en:"Lone Sunflower",vi:"Hoa hướng dương đơn độc",zh:"单株向日葵"},
        {id:229,en:"Corn",vi:"Ngô",zh:"玉米"},
        {id:230,en:"Giant Brussels Sprout",vi:"Bắp cải Brussels khổng lồ",zh:"巨型抱子甘蓝"},
        {id:231,en:"Giant Brussels Sapling",vi:"Cây giống cải Brussels",zh:"巨型抱子甘蓝苗"},
        {id:232,en:"Aerial Root",vi:"Rễ trên không",zh:"气根"},
        {id:233,en:"Red Earth",vi:"Đất đỏ",zh:"红土"},
        {id:234,en:"Rice",vi:"Lúa gạo",zh:"水稻"},
        {id:236,en:"Cucumber",vi:"Dưa chuột",zh:"黄瓜"},
        {id:237,en:"Red Pine Nut",vi:"Hạt thông đỏ",zh:"红松果"},
        {id:238,en:"Thorny Grass",vi:"Cỏ gai",zh:"荆棘草"},
        {id:241,en:"Sweet Potato",vi:"Khoai lang",zh:"红薯"},
        {id:242,en:"Cactus Trunk",vi:"Thân cây xương rồng",zh:"仙人掌干"},
        {id:243,en:"Wild Corn",vi:"Ngô dại",zh:"野生玉米"},
        {id:245,en:"Aquatic Plant",vi:"Thực vật thủy sinh",zh:"水生植物"},
        {id:246,en:"Kelp",vi:"Tảo bẹ",zh:"海带"},
        {id:247,en:"Floating Petals",vi:"Cánh hoa trôi nổi",zh:"漂浮花瓣"},
        {id:248,en:"Float Board",vi:"Ván nổi",zh:"浮板"},
        {id:249,en:"Pine Cone",vi:"Quả thông",zh:"松球"},
        {id:250,en:"Lotus",vi:"Hoa sen",zh:"荷花"},
        {id:251,en:"Bamboo",vi:"Cây tre",zh:"竹子"},
        {id:252,en:"Bamboo Leaf",vi:"Lá tre",zh:"竹叶"},
        {id:253,en:"Bamboo Shoot",vi:"Măng tre",zh:"竹笋"},
        {id:254,en:"Peach Wood",vi:"Gỗ đào",zh:"桃木"},
        {id:255,en:"Peach Leaf",vi:"Lá hoa đào",zh:"桃叶"},
        {id:256,en:"Peach Sapling",vi:"Cây đào non",zh:"桃树苗"},
        {id:261,en:"Star Spore",vi:"Bào tử sao",zh:"星孢子"},
        {id:263,en:"Star Spore Seed",vi:"Hạt giống bào tử sao",zh:"星孢子种子"},
        {id:264,en:"Limestone Slab",vi:"Tấm đá vôi",zh:"石灰岩板"},
        {id:266,en:"Mutant Earthworm",vi:"Giun đất đột biến",zh:"变异蚯蚓"},
        {id:267,en:"Mutant Purple Perilla",vi:"Cây tía tô đột biến",zh:"变异紫苏"},
        {id:268,en:"Mutant Trunk",vi:"Thân cây đột biến",zh:"变异树干"},
        {id:269,en:"Fluorescent Grass",vi:"Cỏ huỳnh quang",zh:"荧光草"},
        {id:287,en:"Serrated Fern",vi:"Dương xỉ răng cưa",zh:"锯齿蕨"},
        {id:292,en:"Coconut Sapling",vi:"Cây con dừa",zh:"椰子树苗"},
        {id:295,en:"Large Coconut",vi:"Dừa lớn",zh:"大椰子"},
        {id:300,en:"Bellflower",vi:"Hoa chuông",zh:"风铃花"},
        {id:301,en:"Orchid",vi:"Nhược lan",zh:"兰花"},
        {id:302,en:"Star Flower",vi:"Hoa sao",zh:"星花"},
        {id:303,en:"Dragon Blood Flower",vi:"Hoa huyết rồng",zh:"血龙花"},
        {id:304,en:"Water Hyacinth",vi:"Hoa lục bình",zh:"凤眼莲"},
        {id:305,en:"Dragon Claw Grass",vi:"Cỏ móng rồng",zh:"龙爪草"},
        {id:306,en:"Dragon Blood Tree",vi:"Cây huyết rồng",zh:"血龙树"},
        {id:307,en:"Red Agave",vi:"Cây thùa đỏ",zh:"红龙舌兰"},
        {id:308,en:"Orange Agave",vi:"Cây thùa cam",zh:"橙龙舌兰"},
        {id:309,en:"Gray Agave",vi:"Cây thùa xám",zh:"灰龙舌兰"},
        {id:310,en:"Pink Agave",vi:"Cây thùa hồng",zh:"粉龙舌兰"},
        {id:311,en:"White Coconut Flower",vi:"Hoa dừa trắng",zh:"白椰花"},
        {id:312,en:"Yellow Bell Flower",vi:"Hoa chuông vàng",zh:"黄风铃花"},
        {id:313,en:"Wild Rose",vi:"Hoa hồng dại",zh:"野玫瑰"},
        {id:314,en:"Red Algae",vi:"Tảo đỏ",zh:"红藻"},
        {id:379,en:"Tree Fruit Block",vi:"Khối trái cây trên cây",zh:"树果方块"},
        {id:380,en:"Bush Sapling",vi:"Cây con bụi",zh:"灌木苗"},
        {id:382,en:"Rainforest Sapling",vi:"Cây con rừng mưa",zh:"雨林树苗"},
        {id:383,en:"Banana Sapling",vi:"Cây chuối con",zh:"香蕉树苗"},
        {id:384,en:"Banana Leaf",vi:"Lá chuối",zh:"香蕉叶"},
        {id:385,en:"Banana Block",vi:"Khối chuối",zh:"香蕉方块"},
        {id:386,en:"Banana Trunk",vi:"Thân cây chuối",zh:"香蕉树干"},
        {id:392,en:"Thicket",vi:"Bụi rậm",zh:"丛林灌木"},
        {id:397,en:"Moss",vi:"Rêu",zh:"青苔"},
        {id:431,en:"Bellflower Seed",vi:"Hạt giống hoa chuông",zh:"风铃花种子"},
        {id:432,en:"Orchid Seed",vi:"Hạt giống phong lan",zh:"兰花种子"},
        {id:433,en:"Star Flower Seed",vi:"Hạt giống hoa sao",zh:"星花种子"},
        {id:434,en:"Dragon Blood Flower Seed",vi:"Hạt giống hoa huyết rồng",zh:"血龙花种子"},
        {id:435,en:"Water Hyacinth Seed",vi:"Hạt lục bình",zh:"凤眼莲种子"},
        {id:436,en:"Dragon Claw Grass Seed",vi:"Hạt cỏ móng rồng",zh:"龙爪草种子"},
        {id:437,en:"Dragon Blood Tree Seed",vi:"Hạt cây huyết rồng",zh:"血龙树种子"},
        {id:444,en:"Wild Rose Seed",vi:"Hạt hoa hồng dại",zh:"野玫瑰种子"},
        {id:465,en:"Pink-Purple Mushroom",vi:"Nấm độc tím hồng",zh:"粉紫毒蘑菇"},
        {id:477,en:"Poplar Wood",vi:"Gỗ cây dương",zh:"白杨木"},
        {id:480,en:"Poplar Leaf",vi:"Lá cây dương",zh:"白杨叶"},
        {id:579,en:"Rainforest Tree",vi:"Cây rừng mưa",zh:"雨林大树"},
        {id:590,en:"Sacred Tree Trunk",vi:"Thân cây thiêng liêng",zh:"神圣树干"},
        {id:591,en:"Sacred Tree Seed",vi:"Hạt giống cây thiêng",zh:"神圣树种"},
        {id:592,en:"Sacred Leaves",vi:"Lá thiêng liêng",zh:"神圣树叶"},
        {id:1186,en:"Red Spider Lily",vi:"Hoa loa kèn nhện đỏ",zh:"红蜘蛛百合"},
        {id:1187,en:"Otherworld Pineapple",vi:"Dứa bờ bên kia",zh:"彼岸菠萝"},
        {id:1194,en:"Otherworld Seed",vi:"Hạt giống bờ bên kia",zh:"彼岸种子"},
        {id:1798,en:"Fluorescent Grass Block",vi:"Cỏ huỳnh quang",zh:"荧光草块"}
      ],
      liquid: [
        {id:3, en:"Still Water",vi:"Nước tĩnh",zh:"静态水"},
        {id:4, en:"Flowing Water",vi:"Nước động",zh:"动态水"},
        {id:5, en:"Still Magma",vi:"Magma tĩnh",zh:"静态岩浆"},
        {id:6, en:"Flowing Magma",vi:"Magma năng động",zh:"动态岩浆"},
        {id:11,en:"Still Honey",vi:"Mật ong tĩnh",zh:"静态蜂蜜"},
        {id:12,en:"Flowing Honey",vi:"Mật ong động",zh:"动态蜂蜜"},
        {id:13,en:"Still Quicksand",vi:"Cát lún tĩnh",zh:"静态流沙"},
        {id:14,en:"Flowing Quicksand",vi:"Cát lún động",zh:"动态流沙"},
        {id:17,en:"Still Poison",vi:"Độc tính tĩnh",zh:"静态毒液"},
        {id:18,en:"Flowing Poison",vi:"Chất độc động",zh:"动态毒液"}
      ],
      nature: [
        {id:0,  en:"Air",vi:"Không khí",zh:"空气"},
        {id:1,  en:"Earth Core Bedrock",vi:"Nền tảng cốt lõi",zh:"地核基岩"},
        {id:15, en:"Cursed Stone",vi:"Đá bị nguyền rủa",zh:"诅咒石"},
        {id:19, en:"Wind-Eroded Stone",vi:"Đá bị gió bào mòn",zh:"风蚀石"},
        {id:23, en:"Deep Sedimentary Rock",vi:"Đá trầm tích sâu",zh:"深层沉积岩"},
        {id:24, en:"Manganese Block",vi:"Khối mangan",zh:"锰矿石"},
        {id:25, en:"Coral Reef",vi:"Rạn san hô",zh:"珊瑚礁"},
        {id:29, en:"Yellow Sand",vi:"Cát vàng",zh:"黄沙"},
        {id:100,en:"Grass Block",vi:"Khối cỏ",zh:"草方块"},
        {id:101,en:"Dirt Clod",vi:"Cục đất",zh:"土块"},
        {id:102,en:"Farmland",vi:"Đất canh tác",zh:"耕地"},
        {id:103,en:"Dirt Pit",vi:"Hố đất",zh:"土坑"},
        {id:104,en:"Stone",vi:"Đá",zh:"石头"},
        {id:107,en:"Rubble",vi:"Đống đổ nát",zh:"碎石堆"},
        {id:110,en:"Scattered Stones",vi:"Đá rải rác",zh:"散落的石头"},
        {id:112,en:"Black Crystal",vi:"Tinh thể đen",zh:"黑色水晶"},
        {id:114,en:"Mud",vi:"Bùn",zh:"泥"},
        {id:119,en:"Dry Earth",vi:"Đất khô",zh:"干燥土地"},
        {id:122,en:"Snow Pile",vi:"Đống tuyết",zh:"雪堆"},
        {id:123,en:"Ice Stone",vi:"Đá viên",zh:"冰石"},
        {id:124,en:"Sulfur Stone",vi:"Đá lưu huỳnh",zh:"硫磺石"},
        {id:125,en:"Burning Sand",vi:"Cát cháy",zh:"燃烧的沙子"},
        {id:140,en:"Life Stone Seat",vi:"Ghế Đá Sự Sống",zh:"生命石台"},
        {id:141,en:"Courage Stone",vi:"Đá Dũng Khí",zh:"勇气之石"},
        {id:142,en:"Wisdom Stone Seat",vi:"Ghế Đá Trí Tuệ",zh:"智慧石台"},
        {id:143,en:"Damaged Altar",vi:"Bàn thờ hư hại",zh:"受损祭坛"},
        {id:150,en:"Red Farmland",vi:"Đất nông nghiệp đỏ",zh:"红色耕地"},
        {id:151,en:"Red Earth Pit",vi:"Hố đất đỏ",zh:"红土坑"},
        {id:398,en:"Wood Ash Block",vi:"Khối tro gỗ",zh:"木灰方块"},
        {id:400,en:"Blazing Ore",vi:"Quặng rực lửa",zh:"烈焰矿石"},
        {id:401,en:"Mithril Ore",vi:"Quặng Mithril",zh:"秘银矿石"},
        {id:402,en:"Condensed Mineral",vi:"Khoáng chất cô đọng",zh:"凝缩矿物"},
        {id:403,en:"Raw Banded Agate",vi:"Đá mã não vân sọc",zh:"原始条纹玛瑙"},
        {id:404,en:"Tungsten Gold Mine",vi:"Mỏ vàng vonfram",zh:"钨金矿"},
        {id:405,en:"Star Energy Mine",vi:"Mỏ năng lượng sao",zh:"星能矿"},
        {id:406,en:"Raw Amber",vi:"Hổ phách thô",zh:"原始琥珀"},
        {id:407,en:"Silica Ore",vi:"Quặng silic",zh:"硅矿石"},
        {id:445,en:"Star Copper Ore",vi:"Quặng đồng sao",zh:"星铜矿石"},
        {id:446,en:"Fluorite",vi:"Fluorite",zh:"萤石"},
        {id:447,en:"Mysterious Fossil",vi:"Hóa thạch bí ẩn",zh:"神秘化石"},
        {id:448,en:"Oil Block",vi:"Khối dầu",zh:"石油方块"},
        {id:449,en:"Star Copper Stone",vi:"Đá đồng sao",zh:"星铜石"},
        {id:450,en:"Purple Fluorite",vi:"Fluorite tím",zh:"紫萤石"},
        {id:451,en:"Copper Alloy Ore",vi:"Quặng hợp kim đồng",zh:"铜合金矿石"},
        {id:452,en:"Titanium Alloy Ore",vi:"Quặng hợp kim titan",zh:"钛合金矿石"},
        {id:453,en:"Attack Rune Ore",vi:"Quặng rune tấn công",zh:"攻击符文矿石"},
        {id:454,en:"Defense Rune Ore",vi:"Quặng rune phòng thủ",zh:"防御符文矿石"},
        {id:455,en:"Effect Rune Ore",vi:"Quặng rune hiệu quả",zh:"效果符文矿石"},
        {id:500,en:"Flame",vi:"Ngọn lửa",zh:"火焰"},
        {id:587,en:"Sacred Fruit",vi:"Trái cây thần thánh",zh:"神圣果实"},
        {id:589,en:"Stone Man Eye",vi:"Mắt người đá",zh:"石人之眼"},
        {id:598,en:"Buried Machinery",vi:"Máy móc bị chôn vùi",zh:"被掩埋的机械"},
        {id:1754,en:"Colorful Clouds",vi:"Đám mây đầy màu sắc",zh:"彩云"},
        {id:1757,en:"Condensation Block",vi:"Khối ngưng tụ",zh:"凝结方块"},
        {id:1758,en:"Black Mud Block",vi:"Khối bùn đen",zh:"黑泥方块"},
        {id:1796,en:"Blueberry Block",vi:"Khối việt quất",zh:"蓝莓方块"},
        {id:1797,en:"Blueberry Grass",vi:"Cỏ việt quất",zh:"蓝莓草片"}
      ],
      decor: [
        {id:1240,en:"Coral Fence Gate",vi:"Cổng hàng rào san hô",zh:"珊瑚围栏门"},
        {id:1241,en:"Shell Fence",vi:"Hàng rào vỏ sò",zh:"贝壳围栏"},
        {id:1242,en:"Shell Gate",vi:"Cổng vỏ sò",zh:"贝壳门"},
        {id:1243,en:"Shell Wind Chime",vi:"Chuông gió vỏ sò",zh:"贝壳风铃"},
        {id:1244,en:"Planet Rock Slope",vi:"Ván trượt dốc đá hành tinh",zh:"星球岩斜板"},
        {id:1245,en:"Bamboo Slope Board",vi:"Ván nghiêng bằng tre",zh:"竹制斜板"},
        {id:1246,en:"Scarlet Slope Board",vi:"Đường nghiêng đỏ tươi",zh:"鲜红斜板"},
        {id:1247,en:"Cement Brick Slope",vi:"Tấm dốc gạch xi măng",zh:"水泥砖斜板"},
        {id:1248,en:"Sulfur Brick Slope",vi:"Tấm dốc gạch lưu huỳnh",zh:"硫磺砖斜板"},
        {id:1249,en:"Stone Slope Slab",vi:"Tấm đá dốc",zh:"石头斜板"},
        {id:1250,en:"Refined Brick Slab",vi:"Tấm gạch tinh chế",zh:"精制砖板"},
        {id:1251,en:"Titanium Alloy Slope",vi:"Tấm nghiêng hợp kim titan",zh:"钛合金斜板"},
        {id:1252,en:"Brass Slope",vi:"Tấm nghiêng đồng thau",zh:"黄铜斜板"},
        {id:1253,en:"Silica Slope",vi:"Tấm nghiêng silica",zh:"硅斜板"},
        {id:1254,en:"Mithril Slope",vi:"Dốc Mithril",zh:"秘银斜板"},
        {id:1255,en:"Blazing Slope",vi:"Tấm nghiêng rực lửa",zh:"烈焰斜板"},
        {id:1378,en:"Coral Shell Chandelier",vi:"Đèn chùm vỏ san hô",zh:"珊瑚吊灯"},
        {id:1380,en:"Light Gray Wood Plank",vi:"Ván gỗ xám nhạt",zh:"浅灰色木板"},
        {id:1811,en:"Chinese Chair",vi:"Ghế kiểu Trung Quốc",zh:"中式椅子"},
        {id:1812,en:"Chinese Table",vi:"Bàn Trung Quốc",zh:"中式桌子"},
        {id:1813,en:"Chinese Wood Chair",vi:"Ghế gỗ Trung Quốc",zh:"中式木椅"},
        {id:1814,en:"Chinese Stove",vi:"Bếp Trung Quốc",zh:"中式灶台"},
        {id:1815,en:"Chinese Cabinet",vi:"Tủ Trung Quốc",zh:"中式橱柜"},
        {id:1816,en:"Hello Kitty Dining Table",vi:"Bàn ăn Hello Kitty",zh:"凯蒂猫餐桌"},
        {id:1817,en:"Hello Kitty Sofa",vi:"Ghế sofa Hello Kitty",zh:"凯蒂猫沙发"},
        {id:1818,en:"Hello Kitty Princess Bed",vi:"Giường công chúa Hello Kitty",zh:"凯蒂猫公主床"},
        {id:1819,en:"Hello Kitty Wardrobe",vi:"Tủ quần áo Hello Kitty",zh:"凯蒂猫衣柜"},
        {id:1820,en:"Hello Kitty Princess Chair",vi:"Ghế Công Chúa Hello Kitty",zh:"凯蒂猫公主椅"},
        {id:1821,en:"Hello Kitty Message Board",vi:"Bảng tin Hello Kitty",zh:"凯蒂猫留言板"},
        {id:1822,en:"Hello Kitty Sign",vi:"Biển hiệu Hello Kitty",zh:"凯蒂猫招牌"},
        {id:1900,en:"Cotton Cluster 0",vi:"Cụm bông 0",zh:"棉花团0"},
        {id:1901,en:"Cotton Cluster 1",vi:"Cụm bông 1",zh:"棉花团1"},
        {id:1912,en:"Cotton Felt",vi:"Nỉ bông",zh:"棉毡"},
        {id:1924,en:"Glass Block",vi:"Khối kính",zh:"玻璃方块"},
        {id:1936,en:"Glass Pane",vi:"Tấm kính",zh:"玻璃片"},
        {id:1948,en:"Tempered Glass Block",vi:"Khối kính cứng",zh:"钢化玻璃块"},
        {id:1960,en:"Color Cement Block",vi:"Khối xi măng màu",zh:"彩色水泥块"},
        {id:1972,en:"Ancient Mithril Block",vi:"Khối Mithril cổ",zh:"古老秘银块"}
      ],
      function: [
        {id:351, en:"Beam Transmission Track",vi:"Đường truyền chùm tia",zh:"光束传输轨道"},
        {id:352, en:"Star Ray",vi:"Tia sáng sao",zh:"星光射线"},
        {id:353, en:"NOT Gate",vi:"Cổng KHÔNG",zh:"非门"},
        {id:354, en:"AND Gate",vi:"Cổng AND",zh:"与门"},
        {id:355, en:"OR Gate",vi:"Cổng OR",zh:"或门"},
        {id:356, en:"Star Energy Splitter",vi:"Bộ chia năng lượng sao",zh:"星能分配器"},
        {id:357, en:"Star Delay",vi:"Độ trễ sao",zh:"星能延迟器"},
        {id:358, en:"Switch",vi:"Công tắc",zh:"开关"},
        {id:359, en:"Pressure Plate",vi:"Tấm áp lực",zh:"压力板"},
        {id:360, en:"Centrifugal Pressure Plate",vi:"Tấm ép ly tâm",zh:"离心压力板"},
        {id:363, en:"Button",vi:"Nút bấm",zh:"按钮"},
        {id:367, en:"Robot Arm",vi:"Cánh tay robot",zh:"机械臂"},
        {id:369, en:"Collection Pipe",vi:"Ống thu gom",zh:"收集管"},
        {id:370, en:"Transfer Pipeline",vi:"Đường ống truyền tải",zh:"传送管道"},
        {id:374, en:"Star Energy Comparator",vi:"Bộ so sánh năng lượng sao",zh:"星能比较器"},
        {id:580, en:"Altar",vi:"Bàn thờ",zh:"祭坛"},
        {id:581, en:"Weather Forecaster",vi:"Máy dự báo thời tiết",zh:"天气预报机"},
        {id:693, en:"Instrument - Drum",vi:"Nhạc cụ - Trống",zh:"乐器-鼓"},
        {id:721, en:"Spike Trap",vi:"Bẫy gai",zh:"尖刺陷阱"},
        {id:726, en:"Piano",vi:"Đàn piano",zh:"钢琴"},
        {id:798, en:"Mithril Forge Table",vi:"Bàn luyện Mithril",zh:"秘银锻造台"},
        {id:814, en:"Mithril Gate",vi:"Cổng Mithril",zh:"秘银门"},
        {id:902, en:"Treasure Totem",vi:"Totem kho báu",zh:"宝藏图腾"},
        {id:908, en:"Lava Giant Statue",vi:"Tượng khổng lồ dung nham",zh:"熔岩巨人像"},
        {id:991, en:"Red Team Rally Point",vi:"Điểm tập trung Đội Đỏ",zh:"红队集结点"},
        {id:1000,en:"Block Copier",vi:"Máy sao chép khối",zh:"方块复制机"},
        {id:1008,en:"Slide Block",vi:"Khối trượt",zh:"滑动方块"},
        {id:1010,en:"Rotating Block",vi:"Khối xoay",zh:"旋转方块"},
        {id:1032,en:"Sensor Block",vi:"Khối cảm biến",zh:"感应方块"},
        {id:1052,en:"Signal Emitter",vi:"Máy phát tín hiệu",zh:"信号发射器"},
        {id:1062,en:"Area Copy Block",vi:"Khối sao chép khu vực",zh:"区域复制方块"},
        {id:1083,en:"Steering Wheel",vi:"Vô lăng",zh:"方向盘"},
        {id:1084,en:"Driver Seat",vi:"Ghế lái",zh:"驾驶座"},
        {id:1085,en:"Mechanical Workshop",vi:"Xưởng cơ khí",zh:"机械工坊"},
        {id:1087,en:"Electric Wheel",vi:"Bánh xe điện",zh:"电动轮"},
        {id:1090,en:"Infinite Engine",vi:"Động cơ vô hạn",zh:"无限引擎"},
        {id:1094,en:"Wing",vi:"Cánh",zh:"翅膀"},
        {id:1096,en:"Space Thruster",vi:"Động cơ đẩy không gian",zh:"太空推进器"},
        {id:1140,en:"Teleport Core Block",vi:"Khối lõi dịch chuyển",zh:"传送核心方块"},
        {id:1160,en:"Mechanical Claw",vi:"Móng vuốt cơ khí",zh:"机械爪"},
        {id:1168,en:"Infrared Sensor",vi:"Cảm biến hồng ngoại",zh:"红外传感器"},
        {id:1189,en:"Propeller",vi:"Cánh quạt",zh:"螺旋桨"},
        {id:1200,en:"Campfire",vi:"Đống lửa",zh:"篝火"},
        {id:1753,en:"Feed Trough",vi:"Máng thức ăn",zh:"饲料槽"}
      ]
    };

    /* ── DOM refs ─────────────────────────────────────────── */
    var overlay    = document.getElementById('blockLibraryOverlay');
    var closeBtn   = document.getElementById('blCloseBtn');
    var grid       = document.getElementById('blGrid');
    var scrollArea = document.getElementById('blScrollArea');
    var tooltip    = document.getElementById('blTooltip');
    var selInfo    = document.getElementById('blSelectedInfo');
    var addBtn     = document.getElementById('blAddBtn');
    var titleEl    = document.getElementById('blTitle');
    var navItems   = document.querySelectorAll('.bl-nav-item');
    var langPills  = document.querySelectorAll('.bl-lang-pill');
    var trigger    = document.getElementById('idlibBlockItem');

    var currentLang  = 'en';
    var currentTab   = 'plant';
    var selected     = null;   // { id, en, vi, zh }

    /* ── Language apply ───────────────────────────────────── */
    function applyLang(lang) {
      currentLang = lang;
      var t = i18n[lang];
      titleEl.textContent = t.title;
      addBtn.textContent  = t.btn;
      navItems.forEach(function(item){
        item.textContent = t.tabs[item.dataset.tab] || item.textContent;
      });
      selInfo.textContent = selected
        ? t.sel(selected[lang] || selected.en, selected.id)
        : t.none;
      langPills.forEach(function(p){
        p.classList.toggle('active', p.dataset.lang === lang);
      });
      renderGrid(false); // re-render names without scroll reset
    }

    langPills.forEach(function(pill){
      pill.addEventListener('click', function(){ applyLang(pill.dataset.lang); });
    });

    /* ── Open / Close ─────────────────────────────────────── */
    function openModal(){
      overlay.classList.add('active');
      renderGrid(true);
    }
    function closeModal(){
      overlay.classList.remove('active');
      tooltip.style.display = 'none';
    }

    trigger.addEventListener('click', function(e){
      e.stopPropagation();
      openModal();
    });
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', function(e){
      if (e.target === overlay) closeModal();
    });
    document.addEventListener('keydown', function(e){
      if (e.key === 'Escape') closeModal();
    });

    /* ── Tab switching ────────────────────────────────────── */
    navItems.forEach(function(item){
      item.addEventListener('click', function(){
        navItems.forEach(function(n){ n.classList.remove('active'); });
        item.classList.add('active');
        currentTab = item.dataset.tab;
        selected   = null;
        selInfo.textContent = i18n[currentLang].none;
        renderGrid(true);
      });
    });

    /* ── Render grid ──────────────────────────────────────── */
    function renderGrid(resetScroll){
      var data = blocks[currentTab] || [];
      grid.innerHTML = data.map(function(b, i){
        return '<div class="bl-slot" data-i="'+i+'">ID: '+b.id+'</div>';
      }).join('');

      if (resetScroll !== false) scrollArea.scrollTop = 0;

      grid.querySelectorAll('.bl-slot').forEach(function(slot){
        var b = data[parseInt(slot.dataset.i)];

        // Re-apply selected highlight
        if (selected && b.id === selected.id) slot.classList.add('selected');

        slot.addEventListener('click', function(){
          grid.querySelectorAll('.bl-slot').forEach(function(s){ s.classList.remove('selected'); });
          slot.classList.add('selected');
          selected = b;
          selInfo.textContent = i18n[currentLang].sel(b[currentLang] || b.en, b.id);
        });

        slot.addEventListener('dblclick', function(){
          if (selected) insertAndClose();
        });

        slot.addEventListener('mouseover', function(){
          tooltip.innerHTML = '<strong>'+(b[currentLang]||b.en)+'</strong><br>ID: '+b.id;
          tooltip.style.display = 'block';
        });
        slot.addEventListener('mousemove', function(e){
          tooltip.style.left = (e.clientX+15)+'px';
          tooltip.style.top  = (e.clientY+15)+'px';
        });
        slot.addEventListener('mouseout', function(){
          tooltip.style.display = 'none';
        });
      });

      // Drag-scroll
      var isDown=false, startY=0, stTop=0;
      scrollArea.onmousedown  = function(e){ isDown=true; startY=e.pageY-scrollArea.offsetTop; stTop=scrollArea.scrollTop; };
      scrollArea.onmouseleave = function(){ isDown=false; };
      scrollArea.onmouseup    = function(){ isDown=false; };
      scrollArea.onmousemove  = function(e){
        if (!isDown) return;
        e.preventDefault();
        scrollArea.scrollTop = stTop - (e.pageY - scrollArea.offsetTop - startY)*1.5;
      };
    }

    /* ── Insert into ACE editor ───────────────────────────── */
    function insertAndClose(){
      if (!selected) return;
      if (typeof ace !== 'undefined'){
        try { ace.edit('codeEditor').insert(String(selected.id)); }
        catch(e){ navigator.clipboard && navigator.clipboard.writeText(String(selected.id)); }
      } else {
        navigator.clipboard && navigator.clipboard.writeText(String(selected.id));
      }
      closeModal();
    }

    addBtn.addEventListener('click', insertAndClose);

    // Init with EN
    applyLang('en');
  })();