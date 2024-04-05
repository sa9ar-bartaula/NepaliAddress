const ADDRESS_MAPPING = {
    "province_1": {
      'Bhojpur':['Bhojpur', 'Sadananda', 'Tyamkemaiyum', 'Ramprasadrai', 'Arun', 'Pauwadungma', 'Salpasilichho', 'Aamchowk', 'Hatuwagadhi'],
      'Dhankuta':['Pakhribaas', 'Dhankuta', 'Mahalaxmi', 'Sagurigadhi', 'Khalsa Chhintang Sahidbhumi', 'Chhathar Jorpati', 'Chaubise'],
      'Ilam':['Illam', 'Deumai', 'Mai', 'Suryodaya', 'Fakfokthum', 'Chulachuli', 'Maijogmai', 'Mangsebung', 'Rong', 'Sandakpur'],
      'Jhapa':['Mechinagar', 'Damak', 'Kankai', 'Bhadrapur', 'Arjundhara', 'Shivasatakshi', 'Gauradaha', 'Birtamod', 'Kamal', 'Gaurigunj', 'Barhadashi', 'Jhapa', 'Buddhasanti', 'Haldibari', 'Kachankawal'],
      'Khotang':['Halesituwachung', 'Rupakot Majhuwagadhi', 'Aiselukharka', 'Lamidada', 'Jantedhunga', 'Khotehang', 'Kepilasgadhi', 'Diprung', 'Sakela', 'Barahpokhari'],
      'Morang':['Biratnagar', 'Belbaari', 'Letang', 'Pathari Sanischare', 'Rangeli', 'Ratuwamai', 'Sunawarsi', 'Urlabaari', 'Sundarharaincha', 'Budhiganga', 'Dhanpalthan', 'Gramthan', 'Jahada', 'Kanepokhari', 'Katahari', 'Kerabaari', 'Miklajung'],
      'Okhaldhunga':['Siddhicharan', 'Khijidemwa', 'Champadevi', 'Chisankhugadhi', 'Manebhanjyang', 'Molung', 'Likhu', 'Sunkoshi'],
      'Panchthar':['Fidim', 'Falelung', 'Falgunanda', 'Hilihang', 'Kummayek', 'Miklajung', 'Tumwewa', 'Yangwarak'],
      'Sankhuwasabha':['Chainpur', 'Dharmadevi', 'Khaadbaari', 'Madi', 'Paanchkhapan', 'Bhotkhola', 'Chichila', 'Makalu', 'Sabhapokhari', 'Silichong'],
      'Solukhumbu':['Solududhkunda', 'Dudhkoshi', 'Khumbu Pasang Lhamu', 'Dudhkausika', 'Nechasalyan', 'Mahakulung', 'Likhu Pike', 'Sotang'],
      'Sunsari':['Itahari', 'Dharan', 'Inaruwa', 'Duhabi', 'Ramdhuni', 'Barah', 'Dewangunj', 'Koshi', 'Gadhi', 'Barju', 'Bhokraha', 'Harinagara'],
      'TapleJung':['Fungling', 'Athrai Tribeni', 'Sidingwa', 'Faktanglung', 'Mikhwakhola', 'Meringden', 'Maiwakhola', 'Yangwarak', 'Sirijunga'],
      'Terhathum':['Myanglung', 'Laligurans', 'Athrai', 'Chhathar', 'Fedaap', 'Menchhayayem'],
      'Udayapur':['Katari', 'Chaudandagadhi', 'Triyuga', 'Belaka', 'Udaypurgadhi', 'Tapli', 'Rautamai', 'Sunkoshi']
    },
    "madhesh_province": {
      'Bara':['Kalaiya', 'Jitpursimara', 'Kolhawi', 'Nijgadh', 'Mahagadimai', 'Simraungadh', 'Adarsha Kotwal', 'Karaiyamai', 'Devtaal', 'Pachrauta', 'Parwanipur', 'Prasauni', 'Pheta', 'Baragadhi', 'Subarna'],
      'Dhanusha':['Janakpur', 'Chhireshwor', 'Ganeshman Charnath', 'Dhanusadham', 'Nagarain', 'Videha', 'Mithila', 'Sahidnagar', 'Sabaila', 'Siddidatri', 'Janaknandini', 'Bateshwor', 'Mithila Bihari', 'Mukhiyapatti musaharmiya', 'Laxminiya', 'Hansapur', 'Aurahi'],
      'Mahottari':['Jaleshwor', 'Bardibas', 'Gausala', 'Ekdara', 'Somana', 'Samsi', 'Loharpatti', 'Ramgopalpur', 'Mahottari', 'Manara', 'Matihani', 'Bhanggaha', 'Balawa', 'Pipara', 'Aurahi'],
      'Parsa':['Birgunj', 'Pokhariya', 'Subarnapur', 'Jagarnathpur', 'Dhobini', 'Chhipaharmai', 'Pakaha Mainapur', 'Bindabasini', 'Bahudarmai', 'Belawa', 'Parsagadhi', 'Sakhuwa Prasauni', 'Paterwa Sugauli'],
      'Rautahat':['Chandrapur', 'Garuda', 'Gaur', 'Baudhimai', 'Brindaban', 'Dewahi Gonahi', 'Durga Bhagwati', 'Gadhimai', 'Gujara', 'Katahariya', 'Madhav Narayan', 'Maulapur', 'Fatuwa Bijayapur', 'Ishanath', 'Paroha', 'Rajpur'],
      'Saptari':['Rrajbiraj nagarpalika', 'Kanchanrup', 'Dakneshwori', 'Bodebarsain', 'Khadak', 'Sambhunath', 'Surunga', 'hanumannagar kankalini', 'Krishna sabaran', 'Chhinnamasta', 'Mahadeva', 'Saptakosi', 'Tirahut', 'Tilathi Koiladi', 'Rupani', 'Belhi Chapena', 'Bishnupur'],
      'Sarlahi':['Ishworpur', 'Lalbandi', 'Haripur', 'Haripurba', 'Hariban', 'Barahathawa', 'Balara', 'Godaita', 'Malangwa', 'Bagmati', 'Kabilasi', 'Chakraghatta', 'Chandranagar', 'Dhankaul', 'Bramhapuri', 'Ramnagar', 'Bishnu'],
      'Siraha':['Lahan', 'Dhangadimai', 'Siraha', 'Golbazar', 'Mirchaiya', 'Kalyanpur', 'Bhagawanpur', 'Aurahi', 'Bishnupur', 'Sukhipur', 'Karjanha', 'Bariyarpatti', 'Laxmipur Patari', 'Naraha', 'Sakhuwanankarkatti', 'Arnama', 'Nawarajpur']
    },
    "bagmati_province": {
      'Bhaktapur':['Changu Narayan', 'Bhaktapur', 'Madhyepur Thimi', 'Suryebinayak'],
      'Chitwan':['Bharatpur', 'Kalika', 'Khairhani', 'Madi', 'Ratnanagar', 'Rapti', 'Echyakamana'],
      'Dhading':['Dhunibenshi', 'Nilkantha', 'Khaniyabash', 'Gajuri', 'Galchi', 'Gangajamuna', 'Jwalamukhi', 'Thakre', 'Netrabati', 'Benighat Rorang', 'Rubi Valley', 'Sidhlake', 'Tripurasundari'],
      'Dolakha':['Jiri', 'Bhimeshwor', 'Kalinchowk', 'Gaurishankar', 'Tamakoshi', 'Melung', 'Bigu', 'Baiteshwor', 'Shailung'],
      'Kavrepalanchowk':['Dhulikhel', 'Banepa', 'Panauti', 'Panchkhaal', 'Namobuddha', 'Khanikhola', 'Chaurideurali', 'Temaal', 'Bethanchowk', 'Bhumlu', 'Mandandeupur', 'Mahabharat', 'Roshi'],
      'Kathmandu':['Kathmandu', 'Kageshwori Manohara', 'Kirtipur', 'Gokarneshwor', 'Chandragiri', 'Tokha', 'Tarkeshwor', 'Dakchinkali', 'Nagarjun', 'Budhanilkantha', 'Shankharapur'],
      'Lalitpur':['Lalitpur', 'Godawari', 'Mahalaxmi', 'Konjyosom', 'Bagmati', 'Mahankaal'],
      'Makwanpur':['Hetauda', 'Thaha', 'Indrasarobar', 'Kailash', 'Bakaiya', 'Bagmati', 'Bhimfedi', 'Makwanpurgadhi', 'Manhari', 'Raksirang'],
      'Nuwakot':['Bidur', 'Belkotgadhi', 'Kakani', 'Kispang', 'Tadigaun', 'Tarkeshwor', 'Dupcheshwor', 'Panchakanya', 'Likhu', 'Meghang', 'Shivapuri', 'Suryegadhi'],
      'Ramechhap':['Manthali', 'Ramechhap', 'Umakunda', 'Khandadevi', 'Gokulganga', 'Doramba', 'Likhu', 'Sunapati'],
      'Rasuwa':['Uttargaya', 'Kalika', 'Gosainkunda', 'Naukunda', 'Parbatikunda'],
      'Sindhuli':['Kamalamaai', 'Dudhauli', 'Golanjor', 'Ghyankhel', 'Tinpatan', 'Fikkal', 'Marin', 'Sunkoshi', 'Hariharpurgadhi'],
      'Sindhupalchowk':['Chautara Sangachowkgadhi', 'Barabise', 'Melamchi', 'Indrabati', 'Jugal', 'Panchpokhari Thanpal', 'Balephi', 'Botekoshi', 'Lisankhu Pakhar', 'Sunkoshi', 'Helambhu', 'Tripurasundari']
    },
    "gandaki_province": {
      'Baglung':['Baglung', 'Galkot', 'Jaimini', 'Dhorpatan', 'Bareng', 'Kathekhola', 'Tamankhola', 'Tarakhola', 'Nisikhola', 'Badigad'],
      'Gorkha':['Gorkha', 'Palungtar', 'Sulikot', 'Siranchok', 'Ajirkot', 'Aarughat', 'Gandaki', 'Chumnubri', 'Dharche', 'Bhimsen', 'Sahid Lakhan'],
      'Kaski':['Pokhara Lekhanath', 'Annapurna', 'Machhapuchhre', 'Madi', 'Rupa'],
      'Lamjung':['Beshi Sahar', 'Madhya Nepal', 'Rainas', 'Sundar Bajar', 'Kobholasothar', 'Dudhpokhari', 'Dordi', 'Marsyandi'],
      'Manang':['Narfu', 'Nashon', 'Neshyang', 'Chame'],
      'Mustang':['Gharpajhong', 'Thasang', 'Dalome', 'Lomanthang', 'Barhagaun Muktichhetra'],
      'Myagdi':['Beni', 'Annapurna', 'Dhaulagiri', 'Mangala', 'Malika', 'Raghuganga'],
      'Nawalpur':['Kawasoti', 'Gaindakot', 'Devchuli', 'Madhyabindu', 'Bungdikali', 'Bulingtar', 'Binayi Tribeni', 'Hupsekot'],
      'Parbat':['Kushma', 'Phalewas', 'Jaljala', 'paiyu', 'Mahashila', 'Modi', 'Bihadi'],
      'Syangja':['Galyang', 'Chapkot', 'Putalibazar', 'Virkot', 'Waling', 'Arjunchaupari', 'Aadhikhola', 'Kaligandaki', 'Fedikhola', 'Biruwa', 'Harinas'],
      'Tanahun':['Bhanu', 'Bhimad', 'Byas', 'Shuklagandaki', 'Ambukhaireni', 'Rhishing', 'Ghiring', 'Devghat', 'Myagdi', 'Bandipur']
    },
    "lumbini_province": {
      'Arghakhanchi':['Sandhikharka', 'Sitganga', 'Bhumikasthan', 'Chhatradev', 'Pandini', 'Malarani'],
      'Banke':['Nepalgunj', 'Koholpur', 'Narainapur', 'Raptisonari', 'Baijanath', 'Khajura', 'Duduwa', 'Janaki'],
      'Bardiya':['Gulariya', 'Madhuban', 'Rajapur', 'Thakurbaba', 'Bansgadhi', 'Barbardiya', 'Badhaiyatal', 'Geruwa'],
      'Dang':['Tulsipur', 'Ghorahi', 'Lamahi', 'Bangalichuli', 'Dangisaran', 'Gadhawa', 'Rajpur', 'Rapti', 'Santinagar', 'Babai'],
      'Gulmi':['Musikot', 'Resunga', 'Ishma', 'Kaligandaki', 'Gulmidarbar', 'Satyawoti', 'Chandrakot', 'Ruru', 'Chhatrakot', 'Dhurkot', 'Madane', 'Malika'],
      'Kapilvastu':['Kapilvastu', 'Buddhabhumi', 'Shivaraj', 'Maharajgang', 'Krishnanagar', 'Bandganga', 'Mayadevi', 'Yesodhara', 'Bijayanagar', 'Suddhodhan'],
      'Nawalparasi West':['Sarawal', 'Ramgram', 'Sunwal', 'Tribenisusta', 'Palhinandan', 'Pratappur', 'Bardghat'],
      'Palpa':['Rampur', 'Tansen', 'Nisdi', 'Purbakhola', 'Rambha', 'Mathagadi', 'Tinau', 'Baganaskali', 'Ribdikot', 'Rainadevi Chhahara'],
      'Pyuthan':['Pyuthan', 'Sworgadwari', 'Gaumukhi', 'Mandabi', 'Sarumarani', 'Mallarani', 'Naubahini', 'Jhimruk', 'Arawoti'],
      'Rolpa':['Rolpa', 'Tribeni', 'Duikholi', 'Madi', 'Runtigadhi', 'Lungri', 'Sukidaha', 'Sunchhahari', 'Subarnawoti', 'Thabang'],
      'Rukum (State 5)':['Putha Uttarganga', 'Bhume', 'Sisne'],
      'Rupandehi':['Butwal', 'Lumbini Saskritik', 'Sidharthanager', 'Sammarimai', 'Debdaha', 'Sainamaina', 'Tilottma', 'Siyari', 'Gaidahawa', 'Kanchan', 'Kotahimai', 'Marchawari', 'Mayadevi', 'Omsatiya', 'Rohindi', 'Suddodhan'],
      'Dailekh':['Narayan', 'Dullu', 'Chamunda Bindrasaini', 'Aathbis', 'Bhagawatimai', 'Gurash', 'Dungeshwar', 'Naumule', 'Mahabu', 'Bhairabi', 'Thatikadh']
    },
    "karnali_province": {
      'Dolpa':['Thuli veri', 'Tripurasundari', 'Dolpa buddha', 'She phoksundo', 'Jagdulla', 'Mudkechula', 'Kaike', 'Chharka tangsong'],
      'Humla':['Simkot', 'Namkha', 'kharpunath', 'Surkegad', 'Chankheli', 'Adanchuli', 'Tajakot'],
      'Jajarkot':['veri', 'Chhedagad', 'Tribeni nalgad', 'Kuse', 'Junichande', 'Barekot', 'Shibalaya'],
      'Jumla':['Chandannath', 'Kankasundari', 'Sinja', 'Hima', 'Tila', 'Guthichaur', 'Tatopani', 'Patarasi'],
      'Kalikot':['Khadachakra', 'Raskot', 'Tilagupha', 'Pachaljharana', 'Sanni tribeni', 'Naraharinath', 'Kalika', 'Mahabai', 'Palata'],
      'Mugu':['Chhayanath', 'Mugumkarmarog', 'Soru', 'Khatyang'],
      'Western Rukum':['Musikot', 'Chaurjahari', 'Aathabiskot', 'Baphikot', 'Tribeni', 'Sanibheri'],
      'Salyan':['Sarada', 'Bagchaur', 'Bangad', 'Kalimati', 'Tribeni', 'Kapurkot', 'Chhatreswori', 'Dhorchaur', 'Kumakhamalika', 'Darma'],
      'Surkhet':['Birendra', 'Bheriganga', 'Gurbhakot', 'Pabchapuri', 'Lekbesi', 'Chaukune', 'Barahatal', 'Chingad', 'Simta']
    },
    "sudur_paschim_province": {
      'Aachham':['Mangalsen', 'Kamalbajar', 'Sanphebagar', 'Panchadewal Binayak', 'Chaurpati', 'Mellekh', 'Bannigadi Jayagadh', 'Ramaroshan', 'Dhakari', 'Turmakhad'],
      'Baitadi':['Dashrathachanda', 'Patan', 'Melauli', 'Purchaudi', 'Surnaya', 'Sisag', 'Shivanath', 'Pancheshwar', 'Dogdakedar', 'Dilasaini'],
      'Bajhang':['jayaprithvi', 'Bungal', 'Talkot', 'Masta', 'Khaptadchhanna', 'Thalara', 'Bitthadchir', 'Surma', 'Chhabispathibhera', 'Durgathali', 'Kedarsyun', 'Kanda'],
      'Bajura':['Badimalika', 'Tribeni', 'Budhiganga', 'Budhinanda', 'Gaumun', 'Pandav', 'Swamikartik', 'Chhededaha', 'Himali'],
      'Dadeldhura':['Amargadhi', 'Parsuram', 'Aalital', 'Bhageshwar', 'nabadurga', 'Ajayameru', 'Ganyapdhura'],
      'Darchula':['Mahakali', 'Shailyashikar', 'Malikarjun', 'Apihimal', 'Duhu', 'Naugad', 'Marma', 'Lekam', 'Byash'],
      'Doti':['Dipayal siladhi', 'Shikhar', 'Purbichauki', 'Badikedar', 'Jorayal', 'Sayal', 'Aadarsh', 'K.I.C', 'Bogatan'],
      'Kailali':['Dhangadhi', 'Tikapur', 'Ghodaghodi', 'Lamkichuha', 'bhajani', 'Godawari', 'Gauriganga', 'Janaki', 'Bardagoriya', 'Mohanyal', 'Kailari', 'Joshipur', 'Chure'],
      'Kanchanpur':['Bhimdatta', 'Punarbas', 'Bedkot', 'Mahakali', 'Shuklaphata', 'Belauri', 'Krishnapur', 'Beldandi', 'Laljhadi']
    }
}
  
$(document).ready(() => {
	// Event listener for province dropdown change
	$('#id_province').on('change', function() {
		const selectedProvince = $(this).val();
		populateDistrictDropdown(selectedProvince);
	});

	// Event listener for district dropdown change
	$('#id_district').on('change', function() {
		const selectedProvince = $('#id_province').val();
		const selectedDistrict = $(this).val();
		populateMunicipalityDropdown(selectedProvince, selectedDistrict);
	});
});


// Function to populate dropdown based on selected province
function populateDistrictDropdown(provinceId) {
    const districtDropdown = $('#id_district');
    const districts = ADDRESS_MAPPING[provinceId] || [];
  
    districtDropdown.empty();
    districtDropdown.append('<option value="">Select district...</option>');
  
    Object.keys(districts).forEach(district => {
        districtDropdown.append(`<option value="${district}">${district}</option>`);
    });
}
  
// Function to populate dropdown based on selected district
function populateMunicipalityDropdown(provinceId, districtId) {
    const municipalityDropdown = $('#id_municipality');
    const municipalities = ADDRESS_MAPPING[provinceId]?.[districtId] || [];
  
    municipalityDropdown.empty();
    municipalityDropdown.append('<option value="">Select municipality...</option>');
  
    municipalities.forEach(municipality => {
        municipalityDropdown.append(`<option value="${municipality}">${municipality}</option>`);
    });
}