// Sticky v1.0 by Daniel Raftery
// http://thrivingkings.com/sticky
//
// http://twitter.com/ThrivingKings

(function( $ )
	{
	
	// Using it without an object
	$.sticky = function(note, options, callback) { return $.fn.sticky(note, options, callback); };
	
	$.fn.sticky = function(note, options, callback) 
		{
		// Default settings
		var position = 'top-left'; // top-left, top-right, bottom-left, or bottom-right
		
		var settings =
			{
			'speed'			:	2000,	 // animations: fast, slow, or integer
			'duplicates'	:	false,  // true or false
			'autoclose'		:	4500  // integer or false
			};
		
		// Passing in the object instead of specifying a note
		if(!note)
			{ note = this.html(); }
		
		if(options)
			{ $.extend(settings, options); }
		
		// Variables
		var display = true;
		var duplicate = 'no';
		
		// Somewhat of a unique ID
		var uniqID = Math.floor(Math.random()*99999);
		
		// Handling duplicate notes and IDs
		$('.sticky-note').each(function()
			{
			if($(this).html() == note && $(this).is(':visible'))
				{ 
				duplicate = 'yes';
				if(!settings['duplicates'])
					{ display = false; }
				}
			if($(this).attr('id')==uniqID)
				{ uniqID = Math.floor(Math.random()*9999999); }
			});
		
		// Make sure the sticky queue exists
		if(!$('#recent-activity').find('.sticky-queue').html())
			{ $('#recent-activity').append('<div class="sticky-queue ' + position + '"></div>'); }
		
		// Can it be displayed?
		if(display)
			{
			// Building and inserting sticky note
			$('.sticky-queue').prepend('<div class="sticky border-' + position + '" id="' + uniqID + '"></div>');
			$('#' + uniqID).append('<img src="close.png" class="sticky-close" rel="' + uniqID + '" title="Close" />');
			$('#' + uniqID).append('<div class="sticky-note" rel="' + uniqID + '">' + note + '</div>');
			
			// Smoother animation
			var height = $('#' + uniqID).height();
			$('#' + uniqID).css('height', height);
			
			$('#' + uniqID).slideDown(settings['speed']);
			display = true;
			}
		
		// Listeners
		$('.sticky').ready(function()
			{
			// If 'autoclose' is enabled, set a timer to close the sticky
			if(settings['autoclose'])
				{ $('#' + uniqID).delay(settings['autoclose']).fadeOut(settings['speed']); }
			});
		// Closing a sticky
		$('.sticky-close').click(function()
			{ $('#' + $(this).attr('rel')).dequeue().fadeOut(settings['speed']); });
		
		
		// Callback data
		var response = 
			{
			'id'		:	uniqID,
			'duplicate'	:	duplicate,
			'displayed'	: 	display,
			'position'	:	position
			}
		
		// Callback function?
		if(callback)
			{ callback(response); }
		else
			{ return(response); }
		
		}
	})( jQuery );
	
	var UserName = ["TurtletheCat","Pobelter","EugeneJPark","Doublelift","C9Sneaky","lamBjerg","Popobelterold","HOGEE","WizFujiiN","HotGuy6Pack","dawoofsclaw","TiPApollo","Soeren","FSNChunkyfresh","Ariana22ROO","Waker","Podu","C9Hard","Shiphtur","HOoZy","Chapanya","Dyrus","Entranced","WildTurtle","WildTurtl","lntense","Hauntzer","LiquidFeniX","THExJOHNxCENA555","Imaqtpie","ZionSpartan","JJackstar","Ekkocat","LiquidKEITH","mldkingking","Loopercorn","TiPMa","Ohhhq","ninjamaster69xxx","CaliTrlolz8","ice","C9Meteos","JannaMechanics","KEITHMCBRIEF","dunamis","Quasmire","scorro","LiquidQuas","GVHauntzer","PengYiliang","Casely","wahoolahoola","godisfeng66666","Zbuum","ilovefatdongs","TransIogic","LemonBoy","Link","Chipotlehunter","TDKkina","DJTrance","Duocek","Hate","KonKwon","Nihillmatic","Zaryab","intero","Biofrost","LongCat4","CSTJesiz","GVKeane","TiPyoondog","RedoutabIe","LiquidXpecial","JayJ","GCoinsop","iKeNNyu","C9Hai","FunFrock","CLGLourlo","evertan","Chaullenger","Aniratak","PorpoiseDeluxe","Isuyu","CLGDandyLite","Arcsecond","BloodWater","Jynthe","Sickoscott","RickyTang","DaBox","ALLRekklesvNA","Hoofspark","DuBuKiD","AdrianMa","GuriAndGunji","stuntopia","RyanChoi","AiShiTeru","FSNMeMer","J0kes","C9Balls","C9SoIo","yungmulahBABY","FeelTheLove","dawolfsclaw","BaamSouma","NMEotter","stuntopolis","llRomell","GoJeongPa","p0z","Trisexual","MarkPassion","Seeiya","AAltec","C9LemonNation","maplestreet8","Resource2englue","MegaZero","VIPEEEEEEEEEEEER","Panchie","fabbbyyy","halo3madsniper","iLucent","1k2o1ko12ko12ko2","Bokbokimacat","VANISHINGDRAG0N","LiquidPiglet","playmkngsupport","Gambler","Gaggiano","JJayel","JoopsaKid","1brayle","Azingy","Kebrex","WahzYan","willxo","TailsLoL","darksnipa47","Thyak","JimmyTalon","vane","sooyoung","lalaisland","Lourlo","Sunar","PlayWithAnimals","scarra","HUYAGorilIA","Lock0nStratos","aphromoo","KMadClown","ChaIlengerAhri","YY90001PiKaChu","Thefatkidfromup","ahqwe5tdoor","Nintenpai","JustJayce","toontown","BasedYoona","Resource2Stars","ExecutionerKen","nicemoves","InvertedComposer","LiquidIWD","Stan007","woshishabi","JukeKing","xPecake","BlGHUEVOS","Plun","KingCobra","TDKSmoothie","TSMLustboy","C10Meteos","lllllllllllllIII","ohdaughter","PekinWoof","BrandonFtw8","m2sticc","DaiJurJur","DontMashMe","CaseOpened","otte","wutroletoplay","Thurtle","Dodo8","Frostalicious","bobqinXD","MrCarter","Hellkey","Chimonaa1","DaBoxII","GVVicious","Jummychu","PAlNLESS","LiLBunnyFuFuu","Lukeeeeeeeeee","Lattman","Daserer","AlliancePatrick","Lionsexual","St1xxay","Kojolika","CSTCris","KojotheCat","StellaLoussier","Gleebglarbu","Altrum","RiotMeyeA","Rule18","mandatorycloud","Tritan","LiquidDominate","cidadedecack","RoA","BillyBoss","xPepastel","TaketheDraw","ST2g","Migipooop","dKiWiKid","NMEflareszx","Gundamu","imp","DDABONG","Daydreamin","Nightlie","MRHIGHLIGHTREEL","Shweeb","JinMori","Tailsz","Bischu","CRBRakin","Chaox","Grigne","LogicalDan","DAKular","DifferentSword","Geranimoo","InnoX","FishingforUrf","FluffyKittens206","ImJinAh","CloudNguyen","moonway","whoishe","TiensiNoAkuma","Ethil","nothinghere","SuperMetroid","hiimgosu","Mammon","BGJessicaJung","coBBz","waitingforu","LearningToPIay","YiOwO","heavenTime","AnDa","WakaWaka","hashinshin","TDKKez","MariaCreveling","Cypress","YahooDotCom","Phanimal","Aror","RFLegendary","BenNguyen","AHHHHHHHHH","Linsanityy","Valkrin","Gate","Allorim","Johnp0t","Superrrman","Laughing","AKAPapaChau","denoshuresK","Anthony","Nightblue3","Aranium","Pallione","BamfDotaPlayer","FakerSama","xiaolan","Sweept","HooManDu","XiaoWeiXiao","HctMike","Revenge","Apauloh","latebloomer","CRBFyre","MongolWarrior","Hiphophammer","CoachLFProTeam","hiimria","Jackoo","Saskio","DadeFakerPawn","GVStvicious","NeonSurge","NMEBodydrop","MatLifeTriHard","PantsareDragon","GinormousNoob","IMbz","miqo","VoyboyCARRY","Hakuho","Hexadecimal","themassacre8","Ayr","SeaHorsee","F0rtissimo","GamerXz","Remie","Soghp","Raimazz","Ultimazero","bigfatlp","NMETrashyy","C9LOD","Popuh","SAGASUPVEIGM","Iamagoodboy","TrollerDog","Descraton","LiquidInoriTV","MiniMe","IlIlIIIlIIIIlIII","Shweebie","KatLissEverdeen","PoppersOP","B1GKr1T","DGB","stephyscute2","TEESEMM","Cyprincess","baohando","urbutts","maplestreeTT","jamee","SawitonReddit","VeryBitter","BenignSentinel","MrJuvel","Denny","LeeGuitarStringa","DKrupt","LAGEhsher","eLLinOiSe","MochiBalls","Sonnynot6","ixou","Taeyawn","Dezx","7hThintoN","BeautifulKorean","VwSTeesum","TLIWDominate","Vsepr","ktSmurf","Vultix","Soredemo","ROBERTxLEE","AnnieBot","aksn1per","IamFearless","FrostyLights","SoYung","Tuoooor","Polx","Agolite","CloudWater","Delta","LAGOrbwalk","sexycan","SimonHawkes","Rohammers","NMEInnoX","ChineseJester","IAmDoughboy","Cytosine","Vanxer","SDiana2","Araya","TheItalianOne","F1Flow","Kazahana","Malajukii","xiaoweiba","JoshMabrey","shinymew","Event","freelancer18","ZnipetheDog","hiitsviper","HappyBirfdizzay","Abou222","Gir1shot2diamond","KiNGNidhogg","PurpleFloyd","Rathul","Kwaku","BeachedWhaIe","14h","Xpecial","CLGThink","Aiciel","oerh","butttpounder","TalkPIayLove","jordank","TwistyJuker","MeganFoxisGG","NiHaoDyLan","TallerACE","Doomtrobo","Wardrium","TwtchTviLoveSezu","Westrice","iMysterious","BennyHung","EnmaDaiO","xTc4","FallenBandit","RumbIeMidGG","deft1","GochuHunter","XxRobvanxX","DuoChiDianShi","coLBubbadub","LeBulbe","TanHat","Dusty","Jibberwackey","Tallwhitebro","llllllllllllIIII","LilBuu","Diamond","cesuna","BigolRon","xSojin","Gh3ttoWatermelon","KingofMemes","111094Jrh","bive","Yammy","FasScriptor","Docxm","GVBunnyFuFuu","Alphabetical","Liquidzig","YouHadNoDream","TINYHUEVOS","Sheepx","GangstaSwerve","LeBulbetier","amandagugu","Rushmore","AnnieCHastur","OverlordForte","Muffintopper66","Kazura","zetsuen","wozhixiangyin","CaptainNuke","alextheman","Seongmin","Working","kyaasenpaix3","gurminder","VwSKhoachitizer","TGZ","KrucifixKricc","Kevnn","Academiic","ArianaLovato","Elemia","CLGDeftsu","XerbeK","CeIestic","RedEyeAkame","Kerpal","xFSNSaber","MakNooN","Hcore","MrGamer","zeralf","Fenixlol","Indivisible","SHOWMETHECoins","Adorations","Niqhtmarex","RambointheJungle","Iucid","iOddOrange","Uncover","DD666666","r0b0cop","VictoricaDebloiz","Gleebglarb","EmperorSteeleye","SillyAdam","WWWWWWWWWWWWWWMW","tempname456543","FeedOn","iJesus69","OmegaB","Riftcrawl","Xandertrax","Krymer","TwistedSun","DeTRFShinmori","RiceFox","iKoogar","Mizuji","White","zgerman","FORG1VENliftlift","sakurafIowers","xSaury","PiPiPig","Pyrr","TheCptAmerica","NtzNasty","SlowlyDriftnAway","cre4tive","LAGResource2enShiv","FSNDLuffy","NintendudeX","duliniul","Cybody","Odete49","TFBlade","Platoon","CopyCat","BarbecueRibs","TitanDweevil","HeroesOfTheStorm","JRT94","RedBerrrys","Rockblood","YoloOno","BalmungLFT","IreliaCarriesU","LikeAMaws","PaulDano","ErzaScarIet","KiritoKamui","ProofOfPayment","DonPorks","BarronZzZ","Pikaboo","aLeo","MikeytheBully","7Qing","BillyBossXD","DragonRaider","Haughty","KMadClowns","ikORY","Nikkone","WeixiaTianshi","QQ346443922","FoxDog","Tahx","Hawk","Haruka","Scrumm","cackgod","iAmNotSorry","coLROBERTO","GladeGleamBright","MonkeyDufle","M1ssBear","theletter3","Sandrew","RongRe","MrGatsby","xBlueMoon","Merryem","ElkWhisperer","Enticed","Draguner","DeliciousMilkGG","Patoy","Lucl3n3Ch4k0","Smoian","Piaget","Xiaomi","zeflife","IsDatLohpally","HatersWantToBeMe","Blackmill","PrinceChumpJohn","NhatNguyen","Nebulite","IAmTheIRS","TedStickles","LOD","CallMeExtremity","kimjeii","Kappasun","JJJackstar","TSMMeNoHaxor","Zealous","Normalize","Topcatz","KimchimanBegins","DrawingPalette","AnarchyofDinh","hiimxiao","MikeHct","Manco","ChumpJohnsTeemo","Heejae","delirous","Iodus","WakaWakaWak","Hawez","ThaOGTschussi","TwistedFox","PureCorruption","HotshotGG","Turdelz","ysohardstylez","Brainfre3z","ilyTaylor","Zaineking","QualityADC","LingTong","DyrudeJstormRMX","AnObesePanda","silvermidget","CornStyle","LafalgarTaw","Zeyzal","Meowwwwwww","Pokemorph","JimmyHong","Hoardedsoviet","Nematic","C9Yusui","BlownbyJanna","Sojs","Cerathe","FairieTail","Xeralis","ichibaNNN","SerenityKitty","Contractz","WWvvWvvWvvwWwvww","BlueHole","SAGANoPause","Mookiez","RiotChun","ValkrinSenpai","HeXrisen","CptJack","Sleepyz","HurricaneJanna","ToxiGood","ItsYourChoice","TaintedDucky","probablycoL","Ina","FreeGaming","Phaxen","tofumanoftruth","xHeroofChaos","Rockllee","Sunohara","Ryzer","SpiritDog","Kazma","Sjvir","Maulface","SombreroGalaxy","Bebhead","ecco","AurionKratos","RoseByrne","Kammgefahr","VwSSandvich","TDKLouisXGeeGee","Picarus","erwinbooze","xrawrgasm","Tangularx","CSauce","Back2Nexus","SepekuAW","Chuuper","Airtom","pro711","Theifz","SirhcEezy","LuckyLone56","AtomicN","Splorchicken","00000000","UpAIlNight","k3soju","MikeyC","s7efen","FENOMENO","XIVJan","Splorgen","djpocketchange","Oasis","Iggypop","BallsInYourFace","dopa7","MasterDragonKing","ssforfail","MissyQing","Endlesss","badeed","SmooshyCake","Karmix","Alestz","svbk","KissMeRDJ","TeaMALaoSong","drallaBnayR","CHRISTHORMANN","KnivesMillions","MahNeega","Sphinx","Impasse","Stefono62","CLGEasy","GankedFromAbove","IslandLager","MrJuneJune","BrianTheis","ShorterACE","morippe","Meatmush","Dusey","Paperkat","Submit","TooPro4u","Porogami","iuzi","Suzikai","TDKNear","LiquidInori","Deleted","NtzLeopard","UnKooL","Desu","Born4this","sickening","AllianceMike","Dinklebergg","YouGotFaker","FusionSin","IMBAYoungGooby","Neverlike","BestGodniviaNA","FFat20GGWP","kMSeunG","AliBracamontes","rua0311desuyo","54Bomb99","jivhust","Penguinpreacher","Yashimasta","Erurikku","ReeferChiefer420","WonderfulTea","Gamely","OberonDark","Imunne","Hoeji","xTearz","NicoleKidman","DonDardanoni","Wonderfuls","HentaiKatness69","Ayai","EREnko","Cruzerthebruzer","Connort","Anoledoran","BiggestNoob","Anangelababy007","TrojanPanda","MasterCoach","Kirmora","wswgou","NMEotterr","DragonxCharl","uJ3lly","moosebreeder","Strompest","Kurumx","Protective","LegacyofHao","DkBnet","koreas","AxelAxis","NiMaTMSiLe","Preachy","WoahItsJoe","XXRhythmMasterXX","Lemin","Destinedwithin","Afflictive","Nydukon","Herald0fDeath","ChowPingPong","QuanNguyen","interest","Slylittlefox121","VictimOfTalent","chadiansile","iToradorable","BIackWinter","Mazrer","NKSoju","nhocBym","Dreemo","Virus","CowGoesMooooo","Masrer","Michaelcreative","Emanpop","Druiddroid","KevonBurt","Magicians","HiImYolo","LoveSick","kamonika","Chunkyfresh","tongsoojosim","hiimrogue","Zookerz","LiShengShun","DeTFMYumenoti","EddieMasao","AGilletteRazor","andtheknee","Hazedlol","SrsBznsBro","Spreek","Toxil","JustinJoe","Silverblade12345","WalterWhiteOG","SwiftyNyce","Volt","DoctorElo","Connie","DELLZOR","aiopqwe","MidnightBoba","Sikeylol","Warmogger","Melhsa","OmekoMushi","Life","SleepyDinosaur","Leonard","CatVomit","Likang45","PSiloveyou","xtsetse","ClydeBotNA","Cpense","Arakune","shadowshifte","LeeBai","SexualSavant","CornChowder","DeTRFEsteL","Astro","deDeezer","Jayms","v1anddrotate","JGLafter","UhKili","Aceyy","Zik","RiNDiN","Grandederp","KawaiiTheo","Senjogahara","Th3FooL","GusTn","TheTyrant","GoJeonPa","DJJingYun","Egotesticle","IoveLu","OGNEunJungCho","kevybear","ImJas","Agrorenn","Synxia","DouyuTVForgottt","GrimSamurai","6666666666666","RockleeCtrl","Xode","QQ459680082","KittenAnya","Zakard","MARSIRELIA","WallOfText","SireSnoopy","kelppowder","Hxadecimal","onelaugh","MisoMango","PiggyAzalea","MisterDon","VirginEmperor","suzuXIII","P18GEMEINV","Kurumz","kjin","CcLiuShicC","ExileOfTheBlade","Iambbb","Fubguns","Asutarotto","WhatisLove","Niqhtmarea","L0LWal","JannaFKennedy","Steffypoo","KillerHeedonge","AsianSGpotato","whiteclaw","GATOAmyTorin","lovemyRMB","Frostarix","voyyboy","Melo","RiotZALE","ElvishGleeman","givesyouwiings","LoveIy","Packy","Ntzsmgyu","Susice","Dontqqnubz","mikeshiwuer","Chulss","MASTERDING","Scorpionz","KKOBONG","Veeless","NtzMoon","Leesinwiches","RefuseFate","TP101","ozoss0","SeaShell","Baesed","Foolish","jivhust1","KMadKing","CHRlSS","jbraggs","BeefTacos","Xoqe","Naeim","Aerodactyl","Triett","194IQredditor","Pulzar","Windgelu","Suadero","Zulgor","Senks","cAbstracT","SwagersKing","AkameBestGirl","ThePrimaryEdict","arthasqt","Lobstery","MisterOombadu","TheFriendlyDofu","Oryziaslatipes","ugg1","Flandoor","HawkStandard","wimbis","JimmerFredette","VikingKarots","Sorcerawr","Ciscla","Suffix","MrCow","METALCHOCOB0","Dessias","LevelPerfect","midVox","Junha","Hickus","gamepiong","AirscendoSona","HellooKittie","Jesse","Rainaa","ILoveNASoloQ","Colonelk1","DeTRFZerost","Szmao","TacoKat","1tzJustVictor","HomedogPaws","DioDeSol","PeterBrown","FrannyPack","AbsoluteFridges","TheBiddler","ELMdamemitai","Old","Pavle","nathanielbee","MakiIsuzuSento","nweHuang","EvanRL","yorozu","forgivenbow","alexxisss","Cloverblood","Entities","Believe","Chiruno","Xiaobanma","BestJanna","Neko","TheEyeofHorus","IGotSunshine","Shade20","Sprusse","Imacarebear","Kenleebudouchu","LockDownExec","Chubymonkey","HunterHagen","Applum","DaoKho","MrBlackburn","beatmymeat","BestDota2Sona","chubbiercheeks","KillaKast","Betsujin","TheAmberTeahouse","BellaFlica","ManateeWaffles","Babalew","charmanderu","TooSalty","LotusBoyKiller","Bulgogeeeee","Nerzhu1","Lovelyiris","QuantumFizzics","freakingnoodles","Pdop1","Bakudanx","Martel","DoctorDoom","equalix","CARDCAPTORCARD","Dyad","Papasmuff","TheBroskie","Wadenation","Flyinpiggy","Wingsofdeathx","IamOsiris","ArtThief","LotusEdge","fwii","Kios","Shampu","Nickpappa","Yukari","RayXu","Emeraldancer","TwoPants","EnzoIX","Jacka","Plumber","Skadanton","C9TGleebglarbu","BonQuish","GrimmmmmmmReaper","SmoSmoSmo","MewtMe","Ramzlol","Mruseless","Eitori","S0lipsism","X1337Gm4uLk03rX","lloveOreo","MrChivalry","Oyt","AnVu","RBbabbong","MASTERROSHl","dabestmelon","Potatooooooooooo","KasuganoHaru","C9BalIs","stainzoid","MrArceeSenpaiSir","sweetinnocence","Firehazerd","EpicLynx","2011","PandaCoupIe","Moelon","KingKenneth","Skinathonian","FelixCC","snowmine","Acme","QCoinsAKAQdollas","Fexir","ImbaDreaMeR","ImNovel","ButtercupShawty","touch","penguin","Promitio","DeTRFMoyashi","Hordstyle","Iizard","Jintae","pichumy","Upu","Iemonlimesodas","TwitchTvAuke","Promises","Jintea","OMikasaAckermanO","wompwompwompwomp","Kiyoon","LiquidNyjacky","ATColdblood","SandPaperX","0Sleepless","pr0llylol","AxelsFinalFlame","DrSeussGRINCH","ZENPhooka","oMizu","HamSammiches","Pcboy","RamenWithCheese","Yook","Dafreakz","Winno","XxWarDoomxX","LifelessEyes","UrekMazin0","FrenchLady","Pillowesque","GodOfZed","D3cimat3r","broIy","1stTimeDraven","Exxpression","godofcontrol","nokappazone","Shoopufff","IlIIlIIIlIIIIIII","Fragnat1c","Abidius","irvintaype","YellOwish","japanman","CaristinnQT","LeithaI","Kitzuo","Akatsuki","ROBERTZEBRONZE","aenba","Arcenius","Torgun","Ryden7","Entus","CutestNeo","MonkeyDx","Xerosenkio","JHHoon","DeTFMCeros","Rakinas","MetaRhyperior","MegaMilkGG","EmilyVanCamp","SecretofMana","Snidstrat","SJAero","Mixture","Teaz89","ArizonaGreenTea","AKASIeepingDAWG","sh4pa","Hanjaro","BestFelixNA","Dragles","TummyTuck","sciberbia","KLucid","Isunari","lAtmospherel","Zwag","yuBinstah","ionz","Nove","Nickywu","BlueRainn","lilgrim","Rekeri","Kaichu","Arnold","ArcticPuffin11","UnholyNirvana","IREGlNALD"];
	var CountryFlags = ['img/cf/UK.png', 'img/cf/US.png', 'img/cf/Germany.png', 'img/cf/Netherlands.png', 'img/cf/Sweden.png', 'img/cf/Australia.png', 'img/cf/France.png', 'img/cf/Switzerland.png', 'img/cf/Belgium.png', 'img/cf/Canada.png', 'img/cf/Denmark.png', 'img/cf/Italy.png', 'img/cf/Singapore.png'];
	var Platforms =["<span class='platfrom-append'>on</span> Android","<span class='platfrom-append'>on</span> Android","<span class='platfrom-append'>on</span> iOS","<span class='platfrom-append'>on</span> Android","<span class='platfrom-append'>on</span> iOS"];	
	var FUTresources =["<span class='activity-fut1'>1000000 Coins</span>","<span class='activity-fut1'>1000000 Coins</span>","<span class='activity-fut1'>15000 Coins</span>","<span class='activity-fut1'>1000000 Coins</span>","<span class='activity-fut1'>350000 Coins</span>","<span class='activity-fut1'>350000 Coins</span>", "<span class='activity-fut1'>350000 Coins</span>", "<span class='activity-fut1'>100000 Coins</span>", "<span class='activity-fut1'>100000 Coins</span>"];	
	$(document).ready(function() {
   
 
	$.sticky('<div class="recent-activity-tab"><div class="recent-activity-user-wrapper"><img class="activity-flag-img" src="'+random_flag()+'"/><span class="activity-username">' + random_username() +'</span></div><span class="activity-platform">'+random_platform() +'</span><div class="activity-generated-amount">'+random_futresource() +'</div></div>');
	var call_recent_activity_tab = function() {
		$.sticky('<div class="recent-activity-tab"><div class="recent-activity-user-wrapper"><img class="activity-flag-img" src="'+random_flag()+'"/><span class="activity-username">' + random_username() +'</span></div><span class="activity-platform">'+random_platform() +'</span><div class="activity-generated-amount">'+random_futresource() +'</div></div>');
	}
	setInterval(call_recent_activity_tab, 2500);
	var call_recent_activity_tab = function() {
		$.sticky('<div class="recent-activity-tab"><div class="recent-activity-user-wrapper"><img class="activity-flag-img" src="'+random_flag()+'"/><span class="activity-username">' + random_username() +'</span></div><span class="activity-platform">'+random_platform() +'</span><div class="activity-generated-amount">'+random_futresource() +'</div></div>');
	}
	setInterval(call_recent_activity_tab, 6500);
	var call_recent_activity_tab = function() {
		$.sticky('<div class="recent-activity-tab"><div class="recent-activity-user-wrapper"><img class="activity-flag-img" src="'+random_flag()+'"/><span class="activity-username">' + random_username() +'</span></div><span class="activity-platform">'+random_platform() +'</span><div class="activity-generated-amount">'+random_futresource() +'</div></div>');
	}
	
	function random_username()
	{
	 return UserName[rng(0,UserName['length']-1)];
	}
	function random_platform()
	{
	 return Platforms[rng(0,Platforms['length']-1)];
	}
	function random_flag()
	{
	 return CountryFlags[rng(0,CountryFlags['length']-1)];
	}
	function random_futresource()
	{
	 return FUTresources[rng(0,FUTresources['length']-1)];
	}
}); 
