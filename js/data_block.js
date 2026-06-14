 /* ══════════════ Block Library Data & Logic ══════════════ */
  (function () {
    const libraryData = {
      plant: [
        {id:200,name:"Cherry Wood"},{id:201,name:"Larch Wood"},{id:202,name:"Poplar"},{id:203,name:"Redwood"},
        {id:205,name:"Walnut Wood"},{id:212,name:"Cherry Sapling"},{id:213,name:"Larch Sapling"},{id:214,name:"Poplar Sapling"},
        {id:215,name:"Redwood Sapling"},{id:217,name:"Walnut Sapling"},{id:218,name:"Cherry Leaves"},{id:219,name:"Larch Leaves"},
        {id:220,name:"Poplar Leaves"},{id:221,name:"Redwood Leaves"},{id:223,name:"Walnut Leaves"},{id:224,name:"Small Grass"},
        {id:225,name:"Withered Dry Grass"},{id:226,name:"Sea Worm"},{id:227,name:"Purple Perilla"},{id:228,name:"Lone Sunflower"},
        {id:229,name:"Corn"},{id:230,name:"Giant Brussels Sprout"},{id:231,name:"Giant Brussels Sapling"},{id:232,name:"Aerial Root"},
        {id:233,name:"Red Earth"},{id:234,name:"Rice"},{id:236,name:"Cucumber"},{id:237,name:"Red Pine Nut"},
        {id:238,name:"Thorny Grass"},{id:239,name:"Giant Scale Feather Fruit"},{id:240,name:"Giant Scale Feather Sapling"},{id:241,name:"Sweet Potato"},
        {id:242,name:"Cactus Trunk"},{id:243,name:"Wild Corn"},{id:245,name:"Aquatic Plant"},{id:246,name:"Kelp"},
        {id:247,name:"Floating Petals"},{id:248,name:"Float Board"},{id:249,name:"Pine Cone"},{id:250,name:"Lotus"},
        {id:251,name:"Bamboo"},{id:252,name:"Bamboo Leaf"},{id:253,name:"Bamboo Shoot"},{id:254,name:"Peach Wood"},
        {id:255,name:"Peach Leaf"},{id:256,name:"Peach Sapling"},{id:257,name:"Jane Wood"},{id:258,name:"Precious Tree Leaves"},
        {id:259,name:"Precious Sapling"},{id:260,name:"Leafless Precious Wood"},{id:261,name:"Star Spore"},{id:263,name:"Star Spore Seed"},
        {id:264,name:"Limestone Slab"},{id:265,name:"Leafless Precious Wood Plank"},{id:266,name:"Mutant Earthworm"},{id:267,name:"Mutant Purple Perilla"},
        {id:268,name:"Mutant Trunk"},{id:269,name:"Fluorescent Grass"},{id:270,name:"White Starlight Spore"},{id:271,name:"Orange Starlight Spore"},
        {id:272,name:"Purple-Red Starlight Spore"},{id:273,name:"Light Blue Starlight Spore"},{id:274,name:"Yellow Starlight Spore"},{id:275,name:"Pale Blue Starlight Spore"},
        {id:276,name:"Pink Starlight Spore"},{id:277,name:"Blue Starlight Spore"},{id:278,name:"Red Starlight Spore"},{id:279,name:"Cyan Starlight Spore"},
        {id:280,name:"Purple Starlight Spore"},{id:281,name:"Teal Starlight Spore"},{id:282,name:"Brown Starlight Spore"},{id:283,name:"Gray Starlight Spore"},
        {id:284,name:"Light Gray Starlight Spore"},{id:285,name:"Black Starlight Spore"},{id:286,name:"Mutant Perilla Trunk"},{id:287,name:"Serrated Fern"},
        {id:288,name:"Sawfry"},{id:292,name:"Coconut Sapling"},{id:295,name:"Large Coconut"},{id:297,name:"Mutant Giant Coconut"},
        {id:300,name:"Bellflower"},{id:301,name:"Orchid"},{id:302,name:"Star Flower"},{id:303,name:"Dragon Blood Flower"},
        {id:304,name:"Water Hyacinth"},{id:305,name:"Dragon Claw Grass"},{id:306,name:"Dragon Blood Tree"},{id:307,name:"Red Agave"},
        {id:308,name:"Orange Agave"},{id:309,name:"Gray Agave"},{id:310,name:"Pink Agave"},{id:311,name:"White Coconut Flower"},
        {id:312,name:"Yellow Bell Flower"},{id:313,name:"Wild Rose"},{id:314,name:"Red Algae"},{id:321,name:"Peach Blossom Pile"},
        {id:322,name:"Small Flower Pile"},{id:323,name:"Leaf Pile"},{id:324,name:"Cherry Wood Fruit"},{id:325,name:"Larch Fruit"},
        {id:326,name:"Tree Fruit"},{id:327,name:"Precious Tree Fruit"},{id:328,name:"Redwood Berry"},{id:329,name:"Walnut"},
        {id:330,name:"Peach"},{id:331,name:"Poplar Fruit"},{id:332,name:"Thick Cherry Branch"},{id:333,name:"Fine Cherry Branch"},
        {id:334,name:"Thick Larch Branch"},{id:335,name:"Slender Larch Branch"},{id:336,name:"Thick Precious Branch"},{id:337,name:"Fine Precious Branch"},
        {id:338,name:"Thick Walnut Branch"},{id:339,name:"Slender Walnut Branch"},{id:340,name:"Thick Peach Branch"},{id:341,name:"Slender Peach Branch"},
        {id:342,name:"Thick Poplar Branch"},{id:343,name:"Slender White Poplar Branch"},{id:349,name:"Thick Red Cedar Branch"},{id:350,name:"Thin Red Cedar Branch"},
        {id:379,name:"Tree Fruit Block"},{id:380,name:"Bush Sapling"},{id:382,name:"Rainforest Sapling"},{id:383,name:"Banana Sapling"},
        {id:384,name:"Banana Leaf"},{id:385,name:"Banana Block"},{id:386,name:"Banana Trunk"},{id:392,name:"Thicket"},
        {id:394,name:"Star Bush Leaf"},{id:395,name:"Rainforest Leaf"},{id:396,name:"Rainforest Heart Tree"},{id:397,name:"Moss"},
        {id:431,name:"Bellflower Seed"},{id:432,name:"Orchid Seed"},{id:433,name:"Star Flower Seed"},{id:434,name:"Dragon Blood Flower Seed"},
        {id:435,name:"Water Hyacinth Seed"},{id:436,name:"Dragon Claw Grass Seed"},{id:437,name:"Dragon Blood Tree Seed"},{id:438,name:"Red Agave Seed"},
        {id:439,name:"Orange Agave Seed"},{id:440,name:"Gray Agave Seed"},{id:441,name:"Pink Agave Seed"},{id:442,name:"White Coconut Flower Seed"},
        {id:443,name:"Yellow Bell Flower Seed"},{id:444,name:"Wild Rose Seed"},{id:465,name:"Pink-Purple Poisonous Mushroom"},{id:477,name:"Poplar Wood"},
        {id:478,name:"Thick Poplar Branch"},{id:479,name:"Slender Poplar Branch"},{id:480,name:"Poplar Leaf"},{id:579,name:"Rainforest Tree"},
        {id:590,name:"Sacred Tree Trunk"},{id:591,name:"Sacred Tree Seed"},{id:592,name:"Sacred Leaves"},{id:1186,name:"Red Spider Lily"},
        {id:1187,name:"Otherworld Pineapple"},{id:1194,name:"Otherworld Seed"},{id:1798,name:"Fluorescent Grass"}
      ],
      liquid: [
        {id:3,name:"Still Water"},{id:4,name:"Flowing Water"},{id:5,name:"Still Magma"},{id:6,name:"Flowing Magma"},
        {id:11,name:"Still Honey"},{id:12,name:"Flowing Honey"},{id:13,name:"Still Quicksand"},{id:14,name:"Flowing Quicksand"},
        {id:17,name:"Still Poison"},{id:18,name:"Flowing Poison"}
      ],
      nature: [
        {id:0,name:"Air"},{id:1,name:"Earth Core Bedrock"},{id:15,name:"Cursed Stone"},{id:19,name:"Wind-Eroded Stone"},
        {id:23,name:"Deep Sedimentary Rock"},{id:24,name:"Manganese Block"},{id:25,name:"Coral Reef"},{id:29,name:"Yellow Sand"},
        {id:100,name:"Grass Block"},{id:101,name:"Dirt Clod"},{id:102,name:"Farmland"},{id:103,name:"Dirt Pit"},
        {id:104,name:"Stone"},{id:107,name:"Rubble"},{id:110,name:"Scattered Stones"},{id:112,name:"Black Crystal"},
        {id:114,name:"Mud"},{id:116,name:"Cute Eye Star Stone"},{id:117,name:"Cute Eye Grass Block"},{id:118,name:"Moe Eye Nebula"},
        {id:119,name:"Dry Earth"},{id:122,name:"Snow Pile"},{id:123,name:"Ice Stone"},{id:124,name:"Sulfur Stone"},
        {id:125,name:"Burning Sand"},{id:140,name:"Life Stone Seat"},{id:141,name:"Courage Stone"},{id:142,name:"Wisdom Stone Seat"},
        {id:143,name:"Damaged Altar"},{id:150,name:"Red Farmland"},{id:151,name:"Red Earth Pit"},{id:398,name:"Wood Ash Block"},
        {id:399,name:"Wood Ash Tillage"},{id:400,name:"Blazing Ore"},{id:401,name:"Mithril Ore"},{id:402,name:"Condensed Mineral"},
        {id:403,name:"Raw Banded Agate"},{id:404,name:"Tungsten Gold Mine"},{id:405,name:"Star Energy Mine"},{id:406,name:"Raw Amber"},
        {id:407,name:"Silica Ore"},{id:445,name:"Star Copper Ore"},{id:446,name:"Fluorite"},{id:447,name:"Mysterious Fossil"},
        {id:448,name:"Oil Block"},{id:449,name:"Star Copper Stone"},{id:450,name:"Purple Fluorite"},{id:451,name:"Copper Alloy Ore"},
        {id:452,name:"Titanium Alloy Ore"},{id:453,name:"Attack Rune Ore"},{id:454,name:"Defense Rune Ore"},{id:455,name:"Effect Rune Ore"},
        {id:500,name:"Flame"},{id:587,name:"Sacred Fruit"},{id:588,name:"Blazing Broken Sword"},{id:589,name:"Stone Man Eye"},
        {id:598,name:"Buried Machinery"},{id:1754,name:"Colorful Clouds"},{id:1757,name:"Condensation Block"},{id:1758,name:"Black Mud Block"},
        {id:1796,name:"Blueberry Block"},{id:1797,name:"Blueberry Grass Piece"}
      ],
      decor: [
        {id:1240,name:"Coral Fence Gate"},{id:1241,name:"Shell Fence"},{id:1242,name:"Shell Gate"},{id:1243,name:"Shell Wind Chime"},
        {id:1244,name:"Planet Rock Slope Board"},{id:1245,name:"Bamboo Slope Board"},{id:1246,name:"Scarlet Slope Board"},{id:1247,name:"Cement Brick Slope"},
        {id:1248,name:"Sulfur Brick Slope"},{id:1249,name:"Stone Slope Slab"},{id:1250,name:"Refined Brick Slab"},{id:1251,name:"Titanium Alloy Slope"},
        {id:1252,name:"Brass Slope"},{id:1253,name:"Silica Slope"},{id:1254,name:"Mithril Slope"},{id:1255,name:"Blazing Slope"},
        {id:1378,name:"Coral Shell Chandelier"},{id:1380,name:"Light Gray Wood Plank"},
        {id:1811,name:"Chinese Chair"},{id:1812,name:"Chinese Table"},{id:1813,name:"Chinese Wood Chair"},{id:1814,name:"Chinese Stove"},
        {id:1815,name:"Chinese Cabinet"},{id:1816,name:"Hello Kitty Dining Table"},{id:1817,name:"Hello Kitty Sofa"},{id:1818,name:"Hello Kitty Princess Bed"},
        {id:1819,name:"Hello Kitty Wardrobe"},{id:1820,name:"Hello Kitty Princess Chair"},{id:1821,name:"Hello Kitty Message Board"},{id:1822,name:"Hello Kitty Sign"},
        {id:1823,name:"Hello Kitty Pen"},{id:1824,name:"Hello Kitty Building Block"},{id:1900,name:"Cotton Cluster 0"},{id:1901,name:"Cotton Cluster 1"},
        {id:1912,name:"Cotton Felt"},{id:1924,name:"Glass Block"},{id:1936,name:"Glass Pane"},{id:1948,name:"Tempered Glass Block"},
        {id:1960,name:"Color Cement Block"},{id:1972,name:"Ancient Mithril Block"}
      ],
      function: [
        {id:351,name:"Beam Transmission Track"},{id:352,name:"Star Ray"},{id:353,name:"NOT Gate"},{id:354,name:"AND Gate"},
        {id:355,name:"OR Gate"},{id:356,name:"Star Energy Splitter"},{id:357,name:"Star Delay"},{id:358,name:"Switch"},
        {id:359,name:"Pressure Plate - Touch"},{id:360,name:"Centrifugal Pressure Plate"},{id:363,name:"Button - Touch"},{id:367,name:"Robot Arm"},
        {id:369,name:"Collection Pipe"},{id:370,name:"Transfer Pipeline"},{id:374,name:"Star Energy Comparator"},{id:580,name:"Altar"},
        {id:581,name:"Weather Forecaster"},{id:693,name:"Instrument - Drum"},{id:721,name:"Spike Trap"},{id:726,name:"Piano"},
        {id:798,name:"Mithril Forge Table"},{id:814,name:"Mithril Gate"},{id:902,name:"Treasure Totem"},{id:908,name:"Lava Giant Statue"},
        {id:991,name:"Red Team Rally Point"},{id:1000,name:"Block Copier"},{id:1008,name:"Slide Block"},{id:1010,name:"Rotating Block"},
        {id:1032,name:"Sensor Block"},{id:1052,name:"Signal Emitter"},{id:1062,name:"Area Copy Block"},{id:1083,name:"Steering Wheel"},
        {id:1084,name:"Driver Seat"},{id:1085,name:"Mechanical Workshop"},{id:1087,name:"Electric Wheel"},{id:1090,name:"Infinite Engine"},
        {id:1094,name:"Wing"},{id:1096,name:"Space Thruster"},{id:1140,name:"Teleport Core Block"},{id:1160,name:"Mechanical Claw"},
        {id:1168,name:"Infrared Sensor"},{id:1189,name:"Propeller"},{id:1200,name:"Campfire"},{id:1753,name:"Feed Trough"}
      ]
    };

    const overlay   = document.getElementById('blockLibraryOverlay');
    const closeBtn  = document.getElementById('blCloseBtn');
    const grid      = document.getElementById('blGrid');
    const scrollArea= document.getElementById('blScrollArea');
    const tooltip   = document.getElementById('blTooltip');
    const selInfo   = document.getElementById('blSelectedInfo');
    const addBtn    = document.getElementById('blAddBtn');
    const navItems  = document.querySelectorAll('.bl-nav-item');
    const triggerItem = document.getElementById('idlibBlockItem');

    let selectedBlock = null;
    let currentTab = 'plant';

    // ── Open / Close ──────────────────────────────────
    function openModal() {
      overlay.classList.add('active');
      renderTab(currentTab);
    }

    function closeModal() {
      overlay.classList.remove('active');
    }

    // Click "Block" in the ID Library dropdown
    triggerItem.addEventListener('click', function (e) {
      e.stopPropagation(); // prevent dropdown closing logic from interfering
      openModal();
    });

    closeBtn.addEventListener('click', closeModal);

    // Click backdrop to close
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeModal();
    });

    // ESC key to close
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeModal();
    });

    // ── Tab switching ──────────────────────────────────
    navItems.forEach(function (item) {
      item.addEventListener('click', function () {
        navItems.forEach(n => n.classList.remove('active'));
        item.classList.add('active');
        currentTab = item.dataset.tab;
        selectedBlock = null;
        selInfo.textContent = 'No block selected';
        renderTab(currentTab);
      });
    });

    // ── Render grid ────────────────────────────────────
    function renderTab(tab) {
      const data = libraryData[tab] || [];
      grid.innerHTML = data.map(function (block) {
        return `<div class="bl-slot" data-id="${block.id}" data-name="${block.name}">ID: ${block.id}</div>`;
      }).join('');
      scrollArea.scrollTop = 0;

      // Slot events
      grid.querySelectorAll('.bl-slot').forEach(function (slot) {
        slot.addEventListener('click', function () {
          grid.querySelectorAll('.bl-slot').forEach(s => s.classList.remove('selected'));
          slot.classList.add('selected');
          selectedBlock = { id: parseInt(slot.dataset.id), name: slot.dataset.name };
          selInfo.textContent = `Selected: ${selectedBlock.name}  (ID: ${selectedBlock.id})`;
        });

        slot.addEventListener('dblclick', function () {
          if (selectedBlock) insertAndClose();
        });

        slot.addEventListener('mouseover', function (e) {
          tooltip.innerHTML = `<strong>${slot.dataset.name}</strong><br>ID: ${slot.dataset.id}`;
          tooltip.style.display = 'block';
        });
        slot.addEventListener('mousemove', function (e) {
          tooltip.style.left = (e.clientX + 15) + 'px';
          tooltip.style.top  = (e.clientY + 15) + 'px';
        });
        slot.addEventListener('mouseout', function () {
          tooltip.style.display = 'none';
        });
      });

      // Drag-scroll
      let isDown = false, startY, scrollTop;
      scrollArea.addEventListener('mousedown', function (e) {
        isDown = true; startY = e.pageY - scrollArea.offsetTop; scrollTop = scrollArea.scrollTop;
      });
      scrollArea.addEventListener('mouseleave', () => { isDown = false; });
      scrollArea.addEventListener('mouseup',    () => { isDown = false; });
      scrollArea.addEventListener('mousemove',  function (e) {
        if (!isDown) return;
        e.preventDefault();
        const y = e.pageY - scrollArea.offsetTop;
        scrollArea.scrollTop = scrollTop - (y - startY) * 1.5;
      });
    }

    // ── Insert ID into editor ──────────────────────────
    function insertAndClose() {
      if (!selectedBlock) return;
      // Try to insert into the ACE editor if available
      if (typeof ace !== 'undefined') {
        try {
          const editor = ace.edit('codeEditor');
          editor.insert(String(selectedBlock.id));
        } catch (err) {
          // fallback: copy to clipboard
          navigator.clipboard && navigator.clipboard.writeText(String(selectedBlock.id));
        }
      } else {
        navigator.clipboard && navigator.clipboard.writeText(String(selectedBlock.id));
      }
      closeModal();
    }

    addBtn.addEventListener('click', insertAndClose);
  })();