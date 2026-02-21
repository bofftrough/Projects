/* ============================================================
   THE ODYSSEY — Interactive Map Engine
   Journey data, map markers, story panels, and navigation
   ============================================================ */

// ---- Journey Data ----
const JOURNEY = [
    {
        id: 'troy',
        name: 'Troy',
        epithet: 'The Sacred City of Ilium',
        numeral: 'I',
        x: 940, y: 170,
        book: 'Backdrop — The Iliad',
        details: {
            'Region': 'Troad, Asia Minor',
            'Duration': '10 years of war',
            'Companions': '~600 Ithacans',
            'Modern Location': 'Hisarlık, Turkey'
        },
        senses: `The great walls of Ilium rose like weathered bone against a bruised sky. For ten years,
        Odysseus breathed the dust of the Troad plain — the metallic tang of bronze and blood, the acrid
        smoke of funeral pyres. The Scaean Gates, once magnificent, stood battered and scarred. By the
        final days, the citadel reeked of desperation: the oily smoke of burning offerings, the salt
        of the Hellespont carried on every wind. When the wooden horse was dragged through those ruined
        gates, the cobblestones echoed with hollow celebration — a sound that would haunt every Greek
        who heard it.`,
        narrative: `Troy is where the Odyssey truly begins, though Homer opens his tale a decade after its
        fall. It was Odysseus, the man of many wiles (<em>polytropos</em>), who devised the stratagem of
        the wooden horse that finally breached Priam's citadel. As the city burned, Odysseus gathered his
        twelve ships and his Ithacan crews, eager to return to his wife Penelope and infant son Telemachus.
        He could not have known that the journey home would take as long as the war itself — ten more years
        of wandering across the wine-dark sea.`,
        quote: {
            text: 'He saw the townlands and learned the minds of many distant men, and weathered many bitter nights and days in his deep heart at sea.',
            source: 'Homer, The Odyssey, Book I'
        }
    },
    {
        id: 'ismarus',
        name: 'Ismarus',
        epithet: 'Land of the Cicones',
        numeral: 'II',
        x: 870, y: 145,
        book: 'Book IX',
        details: {
            'Region': 'Thrace',
            'Duration': 'Several days',
            'Losses': '72 men (6 per ship)',
            'Modern Location': 'Alexandroupoli, Greece'
        },
        senses: `The coast of Thrace was low and green, the beaches pale sand giving way to vineyard-covered
        hills. The Ciconian settlement smelled of livestock and fermented wine — their Maronean vintage
        was legendary, dark as garnets and sweet as honey. But the idyll curdled quickly: the screams
        of the raided town, the heavy copper scent of slaughter. Then, the counterattack — Ciconian
        reinforcements streaming down from the hills like ants from a kicked mound, their war-cries
        thinning the salt air. The retreat was desperate, the oar-splashes frantic as blood clouded
        the shallows.`,
        narrative: `Fresh from their triumph at Troy, Odysseus and his men made their first disastrous stop.
        They raided the city of Ismarus, sacking it and taking plunder and women. Odysseus urged his men
        to flee quickly, but they refused — drunk on victory and the famous Maronean wine. The Cicones
        rallied their inland allies, and a fierce battle erupted at dawn. Six men from each of Odysseus's
        twelve ships perished on that beach. It was a brutal lesson: the war was over, but his men still
        carried its violence in their blood. This first failure of discipline would prove prophetic —
        the inability of his crew to heed their captain's warnings would cost them everything.`,
        quote: {
            text: 'I urged them to cut and run, set sail — but would they listen? Not those mutinous fools.',
            source: 'Homer, The Odyssey, Book IX'
        }
    },
    {
        id: 'lotus',
        name: 'Lotus Eaters',
        epithet: 'The Land of Sweet Forgetting',
        numeral: 'III',
        x: 600, y: 560,
        book: 'Book IX',
        details: {
            'Region': 'North Africa (Libya)',
            'Duration': 'Days',
            'Losses': 'None (nearly lost 3)',
            'Modern Location': 'Djerba, Tunisia'
        },
        senses: `After nine days of tempest, a strange calm descended. The coast materialized through
        haze — flat, drowsy, draped in languorous heat. The air was thick with a cloying sweetness,
        like overripe figs and jasmine, almost narcotic in its intensity. Everything here moved slowly.
        The natives had glazed, contented eyes and spoke in soft murmurs. The lotus fruit itself was
        the color of pale amber, soft and dripping, with a taste that obliterated every desire except
        the desire for more. Those who ate it forgot the crash of waves, forgot the faces of their
        children, forgot even the concept of home. The world became warm, honeyed, timeless.`,
        narrative: `Blown off course by a devastating storm sent by Zeus, Odysseus's fleet drifted for nine
        days before reaching a lush, drowsy coast. He sent three scouts ashore, and they encountered the
        Lotus Eaters — a peaceful people who lived on the nectar of the lotus flower. The fruit induced a
        blissful amnesia: those who ate it lost all desire to return home. Odysseus had to drag his weeping
        men back to the ships by force and bind them beneath the rowing benches. It is one of the Odyssey's
        most haunting episodes — the first temptation not of violence, but of peace. To forget one's purpose,
        one's identity, one's home: in Homer's world, this is a fate worse than death.`,
        quote: {
            text: 'Any crewmen who ate the lotus, the honey-sweet fruit, lost all desire to send back word or sail for home.',
            source: 'Homer, The Odyssey, Book IX'
        }
    },
    {
        id: 'cyclops',
        name: 'Cyclopes',
        epithet: 'The Cave of Polyphemus',
        numeral: 'IV',
        x: 470, y: 400,
        book: 'Book IX',
        details: {
            'Region': 'Island near Sicily',
            'Duration': 'Several days',
            'Losses': '6 men devoured',
            'Modern Location': 'Eastern Sicily'
        },
        senses: `The island of the Cyclopes was wild and unsettled — volcanic, fertile, untouched by plow
        or pruning hook. Wild goats skittered over basalt cliffs above a foam-churned shore. Polyphemus's
        cave was enormous, its entrance reeking of sheep dung and sour milk, the floor sticky with whey.
        Inside, the air was hot and close, thick with the lanolin stench of his massive flock. When the
        boulder sealed the entrance, the darkness was absolute — then came the horror: the sound of a
        man's bones cracking, the wet chewing, the screams that echoed off limestone walls. The olive-wood
        stake glowed ember-red in the fire before they drove it into the single eye, and the sizzle was
        like a blacksmith quenching hot iron.`,
        narrative: `Curiosity proved nearly fatal when Odysseus insisted on exploring a Cyclops's cave.
        Polyphemus, the one-eyed giant son of Poseidon, trapped them inside by rolling an immense boulder
        across the entrance. He devoured six of Odysseus's men, two at each meal. Odysseus devised an
        escape: he offered the Cyclops potent Maronean wine (looted from Ismarus), gave his name as
        "Nobody" (<em>Outis</em>), and when the giant fell into a drunken stupor, they drove a sharpened
        olive stake into his eye. Blinded, Polyphemus called for help — "Nobody is killing me!" — and the
        other Cyclopes ignored him. They escaped clinging to the undersides of his sheep. But Odysseus's
        fatal pride surfaced: he shouted his true name as they sailed away. Polyphemus prayed to his
        father Poseidon, who cursed Odysseus to wander for a decade.`,
        quote: {
            text: 'Cyclops — if any man on the face of the earth should ask you who blinded you, say that Odysseus, raider of cities, Laertes\' son who makes his home in Ithaca, maimed you.',
            source: 'Homer, The Odyssey, Book IX'
        }
    },
    {
        id: 'aeolus',
        name: 'Aeolia',
        epithet: 'The Floating Isle of Winds',
        numeral: 'V',
        x: 360, y: 320,
        book: 'Book X',
        details: {
            'Region': 'Floating island',
            'Duration': 'One month',
            'Losses': 'None',
            'Modern Location': 'Aeolian Islands, Italy'
        },
        senses: `Aeolia was uncanny — an island that drifted with no fixed position, ringed by sheer bronze
        walls that gleamed like a mirror in the sun. Inside those walls, the palace of Aeolus was warm
        and fragrant with roasting meats and wine. The wind-king's twelve children (six sons married to
        six daughters) filled the halls with music and laughter. The air itself seemed to vibrate with
        barely contained energy — you could feel the trapped winds pressing against the bronze walls,
        hear their muffled howling like distant wolves. When Aeolus gave Odysseus the leather bag of winds,
        it thrummed and bucked in his hands, warm and alive, straining against its silver cord.`,
        narrative: `Aeolus, keeper of the winds, hosted Odysseus for a full month and gave him a magnificent
        gift: a leather bag containing all the adverse winds, with only the gentle West Wind left free to
        blow them home. For nine days they sailed, and Ithaca actually appeared on the horizon — so close
        they could see the shepherd's fires on shore. But while Odysseus slept, his crew, suspecting the
        bag contained gold, untied it. The winds erupted in a catastrophic gale that blew them all the way
        back to Aeolia. When Odysseus begged for help again, Aeolus refused in horror — clearly, the gods
        had cursed this man. It is perhaps the cruelest moment of the journey: home within sight, lost to
        greed and mistrust.`,
        quote: {
            text: 'So night and day we sailed, and on the tenth day our native land hove into sight at last... but then I fell asleep, and my crew undid the sack.',
            source: 'Homer, The Odyssey, Book X'
        }
    },
    {
        id: 'laestrygonians',
        name: 'Laestrygonia',
        epithet: 'Harbor of the Giant Cannibals',
        numeral: 'VI',
        x: 270, y: 360,
        book: 'Book X',
        details: {
            'Region': 'Western Mediterranean',
            'Duration': 'Hours',
            'Losses': '11 ships and all their crews',
            'Modern Location': 'Bonifacio, Sardinia'
        },
        senses: `The harbor was a trap dressed as a paradise — a narrow, cliff-walled inlet where the water
        lay still as green glass. The cliffs rose hundreds of feet, casting the harbor in cool shadow.
        It was deceptively serene until the first boulder crashed down from above, splintering a hull like
        an eggshell. Then chaos: massive figures appeared on the cliff-tops, hurling rocks the size of
        millstones. The calm harbor became a slaughterhouse — men screaming, timbers shattering, blood
        blooming in the crystalline water. The Laestrygonians speared the swimming men like fish and
        carried them off. Only Odysseus's ship, moored outside the harbor mouth, escaped. Eleven ships
        gone in minutes.`,
        narrative: `This brief, horrifying episode was the single greatest catastrophe of the entire journey.
        The fleet entered a narrow, cliff-ringed harbor that seemed perfectly sheltered. Odysseus, ever
        cautious, moored his own ship outside at the harbor mouth. When the Laestrygonians revealed
        themselves — giants as tall as the cliffs — they rained boulders down on the trapped ships.
        Eleven of Odysseus's twelve vessels were smashed to splinters. The giants speared the drowning
        men and devoured them. Only Odysseus's ship escaped, cutting its mooring lines and rowing
        desperately for open water. In a single afternoon, Odysseus lost the vast majority of his
        expedition — hundreds of men who had survived ten years of war at Troy.`,
        quote: {
            text: 'They speared the crews like fish and whisked them home to make their grisly meal.',
            source: 'Homer, The Odyssey, Book X'
        }
    },
    {
        id: 'circe',
        name: 'Aeaea',
        epithet: 'The Enchanted Isle of Circe',
        numeral: 'VII',
        x: 420, y: 300,
        book: 'Book X',
        details: {
            'Region': 'Tyrrhenian coast',
            'Duration': 'One year',
            'Losses': 'None (men transformed, then restored)',
            'Modern Location': 'Monte Circeo, Italy'
        },
        senses: `Aeaea was lush with ancient forest — oaks and poplars and dark cypresses, the canopy so
        thick that green twilight prevailed at noon. The air was heavy with wild herbs: thyme, fennel,
        sweet marjoram. Circe's palace stood in a clearing of polished stone, smoke curling from its
        chimney, and from within came the sound of her voice — low, crystalline, singing at her great
        loom. Tame wolves and mountain lions padded around the grounds, their eyes eerily human.
        Inside the palace, the scent of her potions mingled with roasting meat and honeyed wine.
        Everything was beautiful and wrong — the kind of beauty that makes the hairs on your neck rise.`,
        narrative: `With only one ship remaining, Odysseus reached the island of the goddess-sorceress Circe.
        She welcomed his scouting party into her halls, fed them a feast laced with enchanted drugs, then
        struck them with her wand — transforming them into swine, though their human minds remained intact.
        Only Eurylochus escaped to warn Odysseus, who set out alone to rescue his men. The god Hermes
        intercepted him and gave him the herb <em>moly</em> — white-flowered, black-rooted — as protection.
        When Circe's magic failed, she recognized Odysseus as the man foretold by prophecy. She restored
        his companions, and they stayed a full year, feasting and recovering from their grief. When they
        finally pressed to leave, Circe told Odysseus he must first journey to the land of the dead.`,
        quote: {
            text: 'She opened her bright doors and stepped forth to invite them in. All entered, witless — except Eurylochus, who sensed a trap.',
            source: 'Homer, The Odyssey, Book X'
        }
    },
    {
        id: 'underworld',
        name: 'The Underworld',
        epithet: 'The House of the Dead',
        numeral: 'VIII',
        x: 400, y: 550,
        book: 'Book XI',
        details: {
            'Region': 'Edge of the world (Oceanus)',
            'Duration': 'One day',
            'Losses': 'None',
            'Modern Location': 'Mythological'
        },
        senses: `They sailed to the edge of the world where the sun never shines — to the land of the
        Cimmerians, shrouded in perpetual fog and darkness. The shore was black sand, the poplars and
        willows ghostly pale. Odysseus dug a pit as Circe instructed and filled it with the blood of
        sacrificed sheep. Then they came — the dead, rising from the earth like smoke, crowding the
        pit with a sound like dry leaves stirring. The cold was unearthly. Their faces were gray and
        translucent, their voices thin as bat-squeaks. Odysseus held them back with his sword until
        the prophet Tiresias drank and spoke. His own mother, Anticlea, appeared — she had died of
        grief waiting for him. When he tried to embrace her, his arms passed through cold air, three times.`,
        narrative: `Following Circe's instructions, Odysseus sailed to the edge of the world to consult the
        dead prophet Tiresias. The <em>Nekyia</em> — the journey to the underworld — is one of the most
        powerful episodes in all of ancient literature. Tiresias warned Odysseus not to harm the cattle of
        Helios and prophesied his eventual return to Ithaca. But the emotional heart of the episode is
        Odysseus's encounter with the shade of his mother Anticlea, who had died of heartbreak during his
        absence. He also met the ghosts of Achilles (who declared he would rather be a living slave than
        king of all the dead), Agamemnon (murdered by his wife upon returning home), and Ajax (who
        refused to speak, still furious over the arms of Achilles). The dead taught Odysseus what the
        living could not: the true cost of glory.`,
        quote: {
            text: 'I would rather be a serf in the house of some landless man than king of all these dead who have done with life.',
            source: 'Achilles to Odysseus — The Odyssey, Book XI'
        }
    },
    {
        id: 'sirens',
        name: 'The Sirens',
        epithet: 'The Singers of Sweet Destruction',
        numeral: 'IX',
        x: 490, y: 340,
        book: 'Book XII',
        details: {
            'Region': 'Near Campania',
            'Duration': 'Passage',
            'Losses': 'None',
            'Modern Location': 'Li Galli islands, near Capri'
        },
        senses: `The sea went utterly flat, as if the water itself were listening. Not a breath of wind.
        Then: the singing. It came from everywhere and nowhere — two voices twining in impossible harmony,
        so achingly beautiful it was almost physically painful. The song promised knowledge: everything
        that happened at Troy, everything that would happen on earth, every secret of the world laid bare
        in melody. Odysseus, lashed to the mast, strained against his ropes until they cut into his flesh,
        weeping, screaming for his men to untie him. His wax-deafened crew saw only their captain writhing
        in apparent agony and rowed harder. The island itself was unremarkable — a small meadow starred
        with flowers, the grass littered with the bleached bones of those who had listened and never left.`,
        narrative: `Circe had warned Odysseus about the Sirens — creatures whose irresistible song lured
        sailors to their deaths on the rocky shore. Odysseus wanted to hear their song (of course he did —
        this is the man defined by his desire to <em>know</em>). He ordered his men to plug their ears
        with beeswax and bind him firmly to the mast. As they rowed past, the Sirens sang directly to
        Odysseus, calling him by name, promising the ultimate temptation: not pleasure, but omniscience.
        He begged and struggled to be released, but his faithful crew only bound him tighter. It is a
        parable about curiosity and restraint — Odysseus is the only mortal to hear the Sirens' song
        and survive, but only because he recognized his own weakness and planned for it.`,
        quote: {
            text: 'Come closer, famous Odysseus — Achaea\'s pride and glory — and listen to our song. No one has ever sailed past us without stopping to hear.',
            source: 'The Sirens — The Odyssey, Book XII'
        }
    },
    {
        id: 'scylla',
        name: 'Scylla & Charybdis',
        epithet: 'The Strait of Monsters',
        numeral: 'X',
        x: 490, y: 380,
        book: 'Book XII',
        details: {
            'Region': 'Narrow strait',
            'Duration': 'Passage (twice)',
            'Losses': '6 men to Scylla',
            'Modern Location': 'Strait of Messina'
        },
        senses: `The strait was narrow enough to hear waves breaking on both shores simultaneously. On
        one side, the sheer cliff of Scylla rose into mist — somewhere up in that gray rock, six heads
        on snaking necks waited in their cave. On the other, the water spiraled into Charybdis: a vast,
        sucking whirlpool that exposed the dark seabed three times a day before vomiting the water back.
        The sound was deafening — the roar of Charybdis like a thousand cataracts, punctuated by the
        barking of Scylla's twelve legs (once, she had been a nymph). When Scylla struck, it was faster
        than thought: six men snatched from the benches mid-stroke, their legs still kicking as they
        were lifted skyward, screaming Odysseus's name.`,
        narrative: `Circe had presented Odysseus with an impossible choice: steer close to Scylla, a
        six-headed monster dwelling in a cliff-cave, and lose six men — or steer toward Charybdis, a
        monstrous whirlpool that could swallow the entire ship. Odysseus chose the lesser evil. He did
        not tell his crew (knowing it would break their nerve), and as they rowed through the strait in
        terror, Scylla struck — her six heads snatching six of his best men from the rowing benches.
        Odysseus later said it was the most pitiful sight he witnessed in all his years of suffering at
        sea. The episode embodies one of the Odyssey's central themes: leadership often means choosing
        between terrible options, bearing the weight of impossible decisions, and living with the guilt
        of those you could not save.`,
        quote: {
            text: 'They writhed, gasping as Scylla swung them up to her cliff — and there, at her cavern\'s mouth, she bolted them down raw, screaming out, flinging their arms toward me in their death-Loss.',
            source: 'Homer, The Odyssey, Book XII'
        }
    },
    {
        id: 'thrinacia',
        name: 'Thrinacia',
        epithet: 'The Sacred Cattle of the Sun',
        numeral: 'XI',
        x: 470, y: 420,
        book: 'Book XII',
        details: {
            'Region': 'Island of Helios',
            'Duration': 'One month (trapped by storms)',
            'Losses': 'All remaining crew',
            'Modern Location': 'Eastern Sicily'
        },
        senses: `The island was golden — quite literally bathed in perpetual warm light, as if the Sun
        himself held his gaze on this place. The cattle of Helios grazed in herds of fifty on emerald
        meadows, impossibly beautiful beasts with broad horns that gleamed like polished gold, their
        hides luminous white. They lowed in deep, resonant tones that sounded almost like chanting.
        The sheep had fleeces of deep violet. The air smelled of warm grass, salt spray, and something
        electric — divinity, perhaps. Then came the month of rain and contrary winds, and with it
        starvation. When the crew finally slaughtered the sacred cattle, the meat crawled on the spits
        and lowed as it roasted — even the hides began to creep along the ground. The gods' horror
        was palpable.`,
        narrative: `Both Tiresias and Circe had warned Odysseus: do not touch the cattle of the Sun god
        Helios. Odysseus extracted an oath from his crew, but storms trapped them on the island for a
        month. Their provisions ran out. While Odysseus prayed alone inland, Eurylochus convinced the
        starving men to slaughter the finest cattle, reasoning that death at sea was preferable to
        starvation. When Odysseus returned and smelled the roasting meat, he knew they were doomed.
        Helios demanded Zeus punish them, threatening to shine among the dead instead. Six days after
        they sailed, Zeus hurled a thunderbolt that split the ship apart. Every man drowned except
        Odysseus, who clung to the wreckage for nine days before washing ashore on Calypso's island.
        He was now utterly alone.`,
        quote: {
            text: 'The Sun god will destroy your ship and crew if you harm his cattle. You alone may survive — but you will come home late, and come home a broken man.',
            source: 'Tiresias to Odysseus — The Odyssey, Book XI'
        }
    },
    {
        id: 'calypso',
        name: 'Ogygia',
        epithet: 'The Hidden Island of Calypso',
        numeral: 'XII',
        x: 320, y: 520,
        book: 'Books I, V',
        details: {
            'Region': 'Remote western sea',
            'Duration': 'Seven years',
            'Losses': 'None (alone)',
            'Modern Location': 'Gozo, Malta (debated)'
        },
        senses: `Ogygia was paradise made prison. The cave of the goddess Calypso ("The Concealer") was
        hung with trailing vines of grape and soft ivy. Four springs of crystalline water ran side by side,
        watering meadows of violet and wild celery. Alder, poplar, and fragrant cypress grew in a sacred
        grove where owls, hawks, and sea-crows nested. The air was thick with cedar and juniper burning
        on the hearth, their fragrance carrying far over the water. Calypso herself was heartbreakingly
        beautiful, her voice like liquid gold as she sang at her loom. And yet, every day for seven years,
        Odysseus sat on the rocky shore, staring east across the empty sea, weeping for home. Even
        paradise is a cage when you cannot leave.`,
        narrative: `For seven years — the longest single episode of Odysseus's journey — the nymph Calypso
        held him on her remote island. She loved him genuinely and offered him the ultimate gift:
        immortality and eternal youth, if only he would stay and be her husband. Odysseus refused. Every
        day he sat on the headland, gazing across the sea toward Ithaca, consumed by longing. This is
        the core of Odysseus's character and the Odyssey's deepest theme: he chose mortality, aging,
        difficulty, and Penelope over paradise. It took divine intervention — Athena appealing to Zeus,
        who sent Hermes — to finally compel Calypso to release him. Even then, she asked bitterly why
        gods begrudge goddesses their mortal lovers. Odysseus built a raft with his own hands and sailed east.`,
        quote: {
            text: 'Much have I suffered, labored long and hard by now in the waves and wars. Add this to the total — bring the trial on!',
            source: 'Homer, The Odyssey, Book V'
        }
    },
    {
        id: 'phaeacians',
        name: 'Scheria',
        epithet: 'The Land of the Phaeacians',
        numeral: 'XIII',
        x: 635, y: 260,
        book: 'Books VI–VIII',
        details: {
            'Region': 'Western Greece (Ionian)',
            'Duration': 'Several days',
            'Losses': 'None',
            'Modern Location': 'Corfu, Greece'
        },
        senses: `After eighteen days at sea on his makeshift raft, Poseidon shattered it in a final
        terrible storm. Odysseus swam for two days and nights, battered by waves, salt-blind and
        half-dead, before crawling ashore at the mouth of a river on Scheria. He buried himself in
        olive leaves for warmth. He was found by Nausicaa, the Phaeacian princess, doing laundry at the
        river — her laughter and the thud of wet linen on rocks woke him. The Phaeacian palace was the
        most magnificent he had ever seen: bronze walls, gold doors, silver doorposts, and gardens that
        bore fruit year-round. The air smelled of pear, pomegranate, apple, and fig. It was civilization
        at its zenith — gracious, generous, and humane.`,
        narrative: `Scheria is where Odysseus finally tells his story — Books IX through XII, the entire
        tale of his wanderings, are narrated by Odysseus himself at the Phaeacian court. King Alcinous
        and Queen Arete received the shipwrecked stranger with extraordinary hospitality. During the
        feast, the blind bard Demodocus sang of the Trojan War, and Odysseus — the master of disguise
        and self-control — wept openly, hiding his tears in his cloak. This prompted Alcinous to ask
        his identity. The Phaeacians, legendary seafarers whose ships sailed by thought alone, agreed
        to carry Odysseus home. They loaded him with treasures and placed him, sleeping, on the shore
        of Ithaca at last. For their kindness, Poseidon turned their returning ship to stone — a final
        act of divine spite.`,
        quote: {
            text: 'I am Odysseus, son of Laertes, known to the world for every kind of craft — my fame has reached the skies.',
            source: 'Homer, The Odyssey, Book IX'
        }
    },
    {
        id: 'ithaca',
        name: 'Ithaca',
        epithet: 'Home at Last — The Final Trial',
        numeral: 'XIV',
        x: 624, y: 335,
        book: 'Books XIII–XXIV',
        details: {
            'Region': 'Ionian Islands, Greece',
            'Duration': 'Final chapters',
            'Losses': '108 suitors slain',
            'Modern Location': 'Ithaca, Greece'
        },
        senses: `He woke on a misty beach and did not recognize his own island — twenty years of absence
        had made even home foreign. Athena, disguised as a shepherd boy, had to tell him where he was.
        Then the mist lifted, and Odysseus fell to his knees and kissed the earth, tears streaming.
        Ithaca was modest — rocky, steep, goat-grazed, unsuitable for horses — but it was his. The
        palace, once proud, was infested with 108 suitors gorging on his livestock, drinking his wine,
        harassing his wife. The great hall reeked of spilled wine and roasting meat. Disguised as an
        old beggar, Odysseus surveyed the ruin of his household. Only his ancient dog Argos recognized
        him — the hound wagged his tail once, then died. When Odysseus finally strung his great bow and
        revealed himself, the arrows sang and the hall ran red.`,
        narrative: `The homecoming is the Odyssey's climax, spanning twelve full books. Disguised as a
        ragged beggar by Athena, Odysseus infiltrated his own palace to assess the situation. One hundred
        and eight suitors had occupied his home for years, consuming his wealth and pressuring Penelope
        to remarry. Odysseus reconnected with his faithful swineherd Eumaeus, revealed himself to his
        grown son Telemachus, and together they plotted the suitors' destruction. Penelope, perhaps
        suspecting, set the contest of the bow — only the man who could string Odysseus's great bow and
        shoot an arrow through twelve axe-heads would win her hand. No suitor could even bend it. Then
        the beggar asked for a turn. The recognition scene between Odysseus and Penelope is one of
        literature's most moving moments — she tested him with the secret of their bed, built around
        a living olive tree, and only then did she believe. After twenty years, the wanderer was home.`,
        quote: {
            text: 'The heart inside me never gave up hope that you would come — though I grieved and wept these twenty years.',
            source: 'Penelope to Odysseus — The Odyssey, Book XXIII'
        }
    }
];

// ---- Roman numeral helper ----
const NUMERALS = ['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII','XIII','XIV'];

// ---- State ----
let currentStop = -1;
let panelOpen = false;

// ---- DOM refs ----
const mapSvg = document.getElementById('odysseyMap');
const markersGroup = document.getElementById('markers');
const storyPanel = document.getElementById('storyPanel');
const overlay = document.getElementById('overlay');
const navStops = document.getElementById('navStops');
const navLineFill = document.getElementById('navLineFill');
const storyTitle = document.getElementById('storyTitle');
const storyNumber = document.getElementById('storyNumber');
const storyEpithet = document.getElementById('storyEpithet');
const storyBody = document.getElementById('storyBody');
const storyClose = document.getElementById('storyClose');
const prevBtn = document.getElementById('prevStop');
const nextBtn = document.getElementById('nextStop');
const preloader = document.getElementById('preloader');

// ---- Initialize ----
function init() {
    createMapMarkers();
    createNavStops();
    bindEvents();
    animateEntrance();

    // Hide preloader
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 2200);
}

// ---- Create SVG map markers ----
function createMapMarkers() {
    JOURNEY.forEach((stop, i) => {
        const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        g.classList.add('map-marker');
        g.setAttribute('data-index', i);
        g.setAttribute('transform', `translate(${stop.x}, ${stop.y})`);

        // Pulse ring (animated)
        const pulse = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        pulse.classList.add('marker-pulse');
        pulse.setAttribute('cx', 0);
        pulse.setAttribute('cy', 0);
        pulse.setAttribute('r', 12);
        pulse.style.animationDelay = `${i * 0.3}s`;

        // Outer ring
        const ring = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        ring.classList.add('marker-ring');
        ring.setAttribute('cx', 0);
        ring.setAttribute('cy', 0);
        ring.setAttribute('r', 12);

        // Inner dot
        const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        dot.classList.add('marker-dot');
        dot.setAttribute('cx', 0);
        dot.setAttribute('cy', 0);
        dot.setAttribute('r', 3.5);

        // Label
        const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        label.classList.add('marker-label');
        label.setAttribute('x', 0);
        label.setAttribute('y', -20);
        label.setAttribute('text-anchor', 'middle');
        label.textContent = stop.name.toUpperCase();

        g.appendChild(pulse);
        g.appendChild(ring);
        g.appendChild(dot);
        g.appendChild(label);

        g.addEventListener('click', () => openStop(i));
        g.addEventListener('mouseenter', () => highlightMarker(i));
        g.addEventListener('mouseleave', () => unhighlightMarker(i));

        markersGroup.appendChild(g);
    });
}

// ---- Create bottom navigation stops ----
function createNavStops() {
    JOURNEY.forEach((stop, i) => {
        const el = document.createElement('div');
        el.classList.add('nav-stop');
        el.setAttribute('data-index', i);
        el.innerHTML = `
            <div class="nav-stop-dot"></div>
            <div class="nav-stop-label">${stop.name}</div>
        `;
        el.addEventListener('click', () => openStop(i));
        navStops.appendChild(el);
    });
}

// ---- Bind events ----
function bindEvents() {
    storyClose.addEventListener('click', closePanel);
    overlay.addEventListener('click', closePanel);
    prevBtn.addEventListener('click', () => navigateStop(-1));
    nextBtn.addEventListener('click', () => navigateStop(1));

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closePanel();
        if (panelOpen && e.key === 'ArrowLeft') navigateStop(-1);
        if (panelOpen && e.key === 'ArrowRight') navigateStop(1);
    });
}

// ---- Open a stop ----
function openStop(index) {
    if (index < 0 || index >= JOURNEY.length) return;
    currentStop = index;
    const stop = JOURNEY[index];

    // Update story panel content
    storyNumber.textContent = stop.numeral;
    storyTitle.textContent = stop.name;
    storyEpithet.textContent = stop.epithet;

    // Build body HTML
    let bodyHTML = '';

    // Details grid
    bodyHTML += '<div class="story-section">';
    bodyHTML += '<div class="section-label">Details</div>';
    bodyHTML += '<div class="detail-grid">';
    for (const [key, val] of Object.entries(stop.details)) {
        bodyHTML += `<div class="detail-item">
            <div class="detail-label">${key}</div>
            <div class="detail-value">${val}</div>
        </div>`;
    }
    bodyHTML += '</div></div>';

    // The Senses section
    bodyHTML += '<div class="story-section">';
    bodyHTML += '<div class="section-label">The Senses — How It Felt</div>';
    bodyHTML += `<p>${stop.senses}</p>`;
    bodyHTML += '</div>';

    // Narrative section
    bodyHTML += '<div class="story-section">';
    bodyHTML += `<div class="section-label">The Story — ${stop.book}</div>`;
    bodyHTML += `<p>${stop.narrative}</p>`;
    bodyHTML += '</div>';

    // Quote
    if (stop.quote) {
        bodyHTML += '<div class="story-section">';
        bodyHTML += '<div class="section-label">From the Text</div>';
        bodyHTML += `<div class="quote-block">
            <p>"${stop.quote.text}"</p>
            <cite>— ${stop.quote.source}</cite>
        </div>`;
        bodyHTML += '</div>';
    }

    storyBody.innerHTML = bodyHTML;

    // Scroll story to top
    document.querySelector('.story-scroll').scrollTop = 0;

    // Update nav buttons
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === JOURNEY.length - 1;

    // Open panel
    storyPanel.classList.add('open');
    overlay.classList.add('visible');
    panelOpen = true;

    // Update marker states
    updateMarkerStates(index);

    // Update nav
    updateNav(index);
}

// ---- Close panel ----
function closePanel() {
    storyPanel.classList.remove('open');
    overlay.classList.remove('visible');
    panelOpen = false;

    // Clear active markers
    document.querySelectorAll('.map-marker.active').forEach(m => m.classList.remove('active'));
    document.querySelectorAll('.nav-stop.active').forEach(n => n.classList.remove('active'));
}

// ---- Navigate between stops ----
function navigateStop(direction) {
    const newIndex = currentStop + direction;
    if (newIndex >= 0 && newIndex < JOURNEY.length) {
        openStop(newIndex);
    }
}

// ---- Update marker active states ----
function updateMarkerStates(activeIndex) {
    document.querySelectorAll('.map-marker').forEach((m, i) => {
        m.classList.toggle('active', i === activeIndex);
    });
}

// ---- Update nav strip ----
function updateNav(activeIndex) {
    const stops = document.querySelectorAll('.nav-stop');
    stops.forEach((s, i) => {
        s.classList.toggle('active', i === activeIndex);
        if (i <= activeIndex) s.classList.add('visited');
    });

    // Fill the progress line
    const pct = (activeIndex / (JOURNEY.length - 1)) * 100;
    navLineFill.style.width = pct + '%';
}

// ---- Highlight marker on hover ----
function highlightMarker(index) {
    const navStop = navStops.children[index];
    if (navStop) navStop.querySelector('.nav-stop-dot').style.borderColor = 'var(--gold)';
}

function unhighlightMarker(index) {
    const navStop = navStops.children[index];
    if (navStop && !navStop.classList.contains('active')) {
        navStop.querySelector('.nav-stop-dot').style.borderColor = '';
    }
}

// ---- Animate route path ----
function animateEntrance() {
    const path = document.getElementById('journeyRoute');
    if (path) {
        const length = path.getTotalLength();
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;
        path.style.transition = 'none';
        path.style.opacity = '0.5';

        // After preloader, animate the route drawing
        setTimeout(() => {
            path.style.transition = 'stroke-dashoffset 4s cubic-bezier(0.4, 0, 0.2, 1)';
            path.style.strokeDashoffset = '0';

            // After route draws, switch to flowing dash animation
            setTimeout(() => {
                path.style.transition = 'none';
                path.style.strokeDasharray = '8 4';
                path.style.strokeDashoffset = '0';
            }, 4200);
        }, 2400);
    }

    // Stagger marker fade-in
    const markers = document.querySelectorAll('.map-marker');
    markers.forEach((m, i) => {
        m.style.opacity = '0';
        m.style.transition = 'opacity 0.5s ease, transform 0.3s var(--ease-out-expo)';
        setTimeout(() => {
            m.style.opacity = '1';
        }, 2600 + i * 150);
    });
}

// ---- Start ----
document.addEventListener('DOMContentLoaded', init);
