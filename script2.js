// Define stops
var stops = ["Nigadi", "Yamunanagr", "Bird Valley", "Gawalimatha", "Landewadi", "Bhosari", "Magazine Chowk", "Dehu Goan", "Wishrantwadi", 
  "Jayashree Talkies", "Kharadi Bypass", "Kharadi Goan", "Mundhawa", "Hadapsar", "Pune Station Depot", "Income Tax Office", "G.P.O.", 
  "Collector Office", "Ambedkar Putla", "Jahngiri Hospital", "Ruby Hall", "Guruprasad Bungalow", "Indra College Jawal Shivneri", 
  "Band Garden Rasta", "Yerwada", "Shadal Baba Dargha", "Kendriya Vidyalaya", "UP Hospital", "Deccan College", "Sapras Post Office", 
  "Holkar Bridge", "Holkar Jal Shudhikaran", "Methodist Church", "Factory Road", "Power House Khadki", "Khadki Bazar", "Alegaonkar School", 
  "Manaji Bagh", "Bopodi Jakat Naka", "CME Dapodi", "Dapodi", "Phugewadi", "Atlas Copco", "Alfa Laval Company", "Forbes Marshall", "Kasarwadi", 
  "Nashik Phata", "Vallabh Nagar Chowk", "Vallabh Nagar S.T. Stand", "Tukaram Putla", "Y.C.M.", "Maheshnagar", "Nehru Nagar", "HA Corner", 
  "Gadhi Nagar", "Mahindra Company", "Pimpri Chowk", "Gokul Hotel", "Pimpri Bridge", "Shagum Chowk", "Karachi Chowk", "Jijamata Hospital", 
  "Jaind Corner", "Ashok Talkies", "Pimpri Gaon", "Bhat Nagar", "Devi Link Society", "Bakwoulf Colony", "Manik Colony", "Darshan Hall",
   "Tanagi Nagar", "B Pravah Link Road", "Shaheed Ashok Kamte", "Akurdi", "Chinchwad", "Pimpri", "Ajmera", "Mahesh Nagar", "Vallabh Nagar", "Nashik Phata","Alandi","Sambhaji Chowk","Navin S.T. Stand","Dehu Phata","Kalewadi Pump","Kate Vasti","Kate Colony","Charholi Phata","Chovisawadi Fata","Wadmukhwadi Fata",
  "Sankalp Garden","Balaji Mandri","Sai Mandir","Sayajinath Maharaj School","Magine","Shri Sant Gajanan Maharaj Nagar","Ganesh Nagar","Phuge wasti","Banacha Odha",
  "S.P.G. School","Shastri Chowk","Maharashtra Chowk","Bhosari Gaon","Gavhane Vasti","Bhaji Mandai Gwahade Basti","Swami Samarth","Landewadi Chowk","Telco Road Corner",
  "Philips Company","MIDC Bhosati","Phulenagar Bhosari Midc","Y.C.M. Hospital","Y.C.M.(Sant Tukaram Nagar)","Maheshnagar","Nehru Nagar Corner","H.A. Corner","Kamgar Nagar",
  "Gandi Nagar","Mahindra Company","Pimpri Road","Pimpri Chowk","Gokul Hotel","Pimpri Bridge","Shagun Chowk","Karachi Chowk","Jijamata Hospital","Shantivan Society",
  "Krushna Mandri Corner","Ingle Hospital","Kalewadi Main","Hanuman Mandir Kalewadi","MM School","Tapkir Chowk","Dhangar Baba","Shri Nagar","kalewadi Phata","Niasrg Society",
  "Manapa Shala Wakad","Kaspatevasti","Mankar Chowk","Choundhe Shala","Nandgude Shala","Vilas Nandgude Niwas","Jagdhmba Hotel","Shikshal Society","Ingwale Chowk Corner",
  "Pimple Nilakh","Nilkeshwar Mandir","Takle Chowk","Jupiter Hospital","Balewadi Phata","Prabhabvee Tech Park","Ganraj Mangal Karyalay","Baner Road/Emperor Hotel","Insurance Company","Baner Depot/D Mart","Pune Manapa Bus Station","Manapa Nadi Kinari(2)","Manapa","Shivaji Putla","Shimla Office","Ganesh Khind Road","Patil Estate","Labour Office(Shopper Stop)",
  "Wakdewadi(Bajaj Showroom)","Mari Aai Gate","Poultry Farm Mumbai Road","Sarvatra Vihar","Khadki Post","Factory Hospital","Khadki Railway Station","Gopi Chaul",
  "Bopodi","CME Dapodi","Dapodi","Phugewadi","Atlas Copco","Alfa Laval Company","Forbes Marshall","Kasarwadi","Nashik Phata","Vallabh Nagar Chowl",
  "Vallabh Nagar S.T. Stand","Tukaram Putla","Y.C.M.","Maheshnagar","Nehru nagar","Zero Boys Bakery","Swapn Nagri","Annasaheb Magar Stadium","Yashwant Nagar Telco Road",
  "Telco Company","K.S.B. Chowk","Shahu Nagar Bus Station","Bahirwade Kridangan","Mahabali Chowk","Shani Madnir","Shivtej Nagar Chowk","Newale Chowk","Sharad Nagar",
  "Gharkul Bus Stop No.1"
];

// Define available buses with their routes
var availableBuses = [
  { 
    id: 1, 
    name: "149U", 
    route: ["Nigadi", "Yamunanagr", "Bird Valley", "Gawalimatha", "Landewadi", "BHosari", 
      "Magzine Chowk", "Dehu Goan", "Wishrantwadi", "Jayashree Talkies", "Kharadi Bypass",
      "Kharadi Goan", "Mundhawa", "Hadapsar"],
    fares: [[0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65],
 [5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
 [10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55],
 [15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
 [20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45],
 [25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40],
 [30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35],
 [35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30],
 [40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25],
 [45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20],
 [50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15],
 [55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10],
 [60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5],
 [65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0]]

  },
  {
  id:2,
  name:"311",
  route:["Pune Satation Depot", "Income Tax Office", "G.P.O.", "Collector office", "Ambedkar Putla", "Pune station", "Jahngiri Hospital",
        "Ruby Hall", "Guruprasad Bungalow", "Indra college Jawal shivneri", "Band Garden Rasta", "Yerwada", "Shadal Baba Dargha", "Kendriya Vidyalay", "UP Hospital",
        "Deccan College", "Sapras Post Office", "Holkar Bridge", "Holkar Jal Shudhikaran", "Methodist Church", "Factory Road", "Power House Khadki", "Khadki Bazar",
        "Alegaonkar School", "Manaji Bagh", "Bopodi Jakat Naka", "CME Dapodi", "Dapodi", "Phugewadi", "Atlas Copco", "Alfa Laval Company", "Forbes Marshall",
        "Kasarwadi", "Nashik Phata", "Vallabh Nagar Chowk", "Vallabh Nagar S.T. Stand", "Tukaram Putla", "Y.C.M.", "Maheshnagar", "Neshru Nagar", "HA Corner", "Gadhi Nagar",
        "Mahindra Company", "Pimpri Chowk", "Gokul Hotel", "Pimpri Bridge", "Shagum Chowk", "Karachi Chowk", "Jijamata Hospital", "Jaind Corner", "Ashok Talkies",
        "Pimpri Gaon"],
  
  fares:[[0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200, 205, 210, 215, 220, 225, 230, 235, 240, 245, 250, 255],
[5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200, 205, 210, 215, 220, 225, 230, 235, 240, 245, 250],
[10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200, 205, 210, 215, 220, 225, 230, 235, 240, 245],
[15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200, 205, 210, 215, 220, 225, 230, 235, 240],
[20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200, 205, 210, 215, 220, 225, 230, 235],
[25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200, 205, 210, 215, 220, 225, 230],
[30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200, 205, 210, 215, 220, 225],
[35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200, 205, 210, 215, 220],
[40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200, 205, 210, 215],
[45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200, 205, 210],
[50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200, 205],
[55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200],
[60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195],
[65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190],
[70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185],
[75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180],
[80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175],
[85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170],
[90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165],
[95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160],
[100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155],
[105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150],
[110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145],
[115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140],
[120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135],
[125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130],
[130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125],
[135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120],
[140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115],
[145, 140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110],
[150, 145, 140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105],
[155, 150, 145, 140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100],
[160, 155, 150, 145, 140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95],
[165, 160, 155, 150, 145, 140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90],
[170, 165, 160, 155, 150, 145, 140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
[175, 170, 165, 160, 155, 150, 145, 140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80],
[180, 175, 170, 165, 160, 155, 150, 145, 140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75],
[185, 180, 175, 170, 165, 160, 155, 150, 145, 140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70],
[190, 185, 180, 175, 170, 165, 160, 155, 150, 145, 140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65],
[195, 190, 185, 180, 175, 170, 165, 160, 155, 150, 145, 140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
[200, 195, 190, 185, 180, 175, 170, 165, 160, 155, 150, 145, 140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55],
[205, 200, 195, 190, 185, 180, 175, 170, 165, 160, 155, 150, 145, 140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
[210, 205, 200, 195, 190, 185, 180, 175, 170, 165, 160, 155, 150, 145, 140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45],
[215, 210, 205, 200, 195, 190, 185, 180, 175, 170, 165, 160, 155, 150, 145, 140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40],
[220, 215, 210, 205, 200, 195, 190, 185, 180, 175, 170, 165, 160, 155, 150, 145, 140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35],
[225, 220, 215, 210, 205, 200, 195, 190, 185, 180, 175, 170, 165, 160, 155, 150, 145, 140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30],
[230, 225, 220, 215, 210, 205, 200, 195, 190, 185, 180, 175, 170, 165, 160, 155, 150, 145, 140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25],
[235, 230, 225, 220, 215, 210, 205, 200, 195, 190, 185, 180, 175, 170, 165, 160, 155, 150, 145, 140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20],
[240, 235, 230, 225, 220, 215, 210, 205, 200, 195, 190, 185, 180, 175, 170, 165, 160, 155, 150, 145, 140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15],
[245, 240, 235, 230, 225, 220, 215, 210, 205, 200, 195, 190, 185, 180, 175, 170, 165, 160, 155, 150, 145, 140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10],
[250, 245, 240, 235, 230, 225, 220, 215, 210, 205, 200, 195, 190, 185, 180, 175, 170, 165, 160, 155, 150, 145, 140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5],
[255, 250, 245, 240, 235, 230, 225, 220, 215, 210, 205, 200, 195, 190, 185, 180, 175, 170, 165, 160, 155, 150, 145, 140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0]]
},
{
  id:4,
  name:"312",
  route:["Pune Satation Depot","Income Tax Office","G.P.O.","Collector office","ambedkar putla","Pune station","Jahngiri Hospital",
    "Ruby Hall","Guruprasad Bungalow","Indra college Jawal shivneri","Band Garden Rasta","Yerwada","Shadal Baba Dargha","Kendriya Vidyalay","UP Hospital",
    "Deccan College","Sapras Post Office","Holkar Bridge","Holkar Jal Shudhikaran","Methodist Church","Factory Road","Power House Khadki","Khadki Bazar",
    "Alegaonkar School","Manaji Bagh","Bopodi Jakat Naka","CME Dapodi","Dapodi","Phugewadi","Atlas Copco","Alfa Laval Company","Forbes Marshall",
    "Kasarwadi","Nashik Phata","Vallabh Nagar Chowl","Vallabh Nagar S.T. Stand","Tukaram Putla","Y.C.M.","Maheshnagar","Nehru nagar","HA Corner","Gadhi Nagar",
    "Mahindra Company","Pimpri Chowk","Gokul Hotel","Pimpri Bridge","Bhat Nagar","Devi Link Society","Bakwoulf Colony","Manik Colony","Darshan Hall","Tanagi Nagar"
    ,"B Pravah Link Road","Shaheed Ashok Kamte"],
  

  fares:[[0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200, 205, 210, 215, 220, 225, 230, 235, 240, 245, 250, 255, 260, 265, 270],
[5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200, 205, 210, 215, 220, 225, 230, 235, 240, 245, 250, 255, 260, 265],
[10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200, 205, 210, 215, 220, 225, 230, 235, 240, 245, 250, 255, 260],
[15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200, 205, 210, 215, 220, 225, 230, 235, 240, 245, 250, 255],
[20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200, 205, 210, 215, 220, 225, 230, 235, 240, 245, 250],
[25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200, 205, 210, 215, 220, 225, 230, 235, 240, 245],
[30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200, 205, 210, 215, 220, 225, 230, 235, 240],
[35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200, 205, 210, 215, 220, 225, 230, 235],
[40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200, 205, 210, 215, 220, 225, 230],
[45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200, 205, 210, 215, 220, 225],
[50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200, 205, 210, 215, 220],
[55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200, 205, 210, 215],
[60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200, 205, 210],
[65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200, 205],
[70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200],
[75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195],
[80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190],
[85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185],
[90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180],
[95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175],
[100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170],
[105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165],
[110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160],
[115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155],
[120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150],
[125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145],
[130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140],
[135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135],
[140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130],
[145, 140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125],
[150, 145, 140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120],
[155, 150, 145, 140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115],
[160, 155, 150, 145, 140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110],
[165, 160, 155, 150, 145, 140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105],
[170, 165, 160, 155, 150, 145, 140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100],
[175, 170, 165, 160, 155, 150, 145, 140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95],
[180, 175, 170, 165, 160, 155, 150, 145, 140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90],
[185, 180, 175, 170, 165, 160, 155, 150, 145, 140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
[190, 185, 180, 175, 170, 165, 160, 155, 150, 145, 140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80],
[195, 190, 185, 180, 175, 170, 165, 160, 155, 150, 145, 140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75],
[200, 195, 190, 185, 180, 175, 170, 165, 160, 155, 150, 145, 140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70],
[205, 200, 195, 190, 185, 180, 175, 170, 165, 160, 155, 150, 145, 140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65],
[210, 205, 200, 195, 190, 185, 180, 175, 170, 165, 160, 155, 150, 145, 140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
[215, 210, 205, 200, 195, 190, 185, 180, 175, 170, 165, 160, 155, 150, 145, 140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55],
[220, 215, 210, 205, 200, 195, 190, 185, 180, 175, 170, 165, 160, 155, 150, 145, 140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
[225, 220, 215, 210, 205, 200, 195, 190, 185, 180, 175, 170, 165, 160, 155, 150, 145, 140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45],
[230, 225, 220, 215, 210, 205, 200, 195, 190, 185, 180, 175, 170, 165, 160, 155, 150, 145, 140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35, 40],
[235, 230, 225, 220, 215, 210, 205, 200, 195, 190, 185, 180, 175, 170, 165, 160, 155, 150, 145, 140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30, 35],
[240, 235, 230, 225, 220, 215, 210, 205, 200, 195, 190, 185, 180, 175, 170, 165, 160, 155, 150, 145, 140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25, 30],
[245, 240, 235, 230, 225, 220, 215, 210, 205, 200, 195, 190, 185, 180, 175, 170, 165, 160, 155, 150, 145, 140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25],
[250, 245, 240, 235, 230, 225, 220, 215, 210, 205, 200, 195, 190, 185, 180, 175, 170, 165, 160, 155, 150, 145, 140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15, 20],
[255, 250, 245, 240, 235, 230, 225, 220, 215, 210, 205, 200, 195, 190, 185, 180, 175, 170, 165, 160, 155, 150, 145, 140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10, 15],
[260, 255, 250, 245, 240, 235, 230, 225, 220, 215, 210, 205, 200, 195, 190, 185, 180, 175, 170, 165, 160, 155, 150, 145, 140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5, 10],
[265, 260, 255, 250, 245, 240, 235, 230, 225, 220, 215, 210, 205, 200, 195, 190, 185, 180, 175, 170, 165, 160, 155, 150, 145, 140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, 5],
[270, 265, 260, 255, 250, 245, 240, 235, 230, 225, 220, 215, 210, 205, 200, 195, 190, 185, 180, 175, 170, 165, 160, 155, 150, 145, 140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0]]
},
  { 
    id: 3, 
    name: "32U", 
    route: ["Nigadi", "Akurdi", "Chinchwad", "Pimpri", "Ajmera", "Nehru Nagar", 
      "Mahesh NAgar", "Vallabh Nagar", "Nashik Phata"],
    fares: {
      "Nigadi-Akurdi": 40,
      "Nigadi-Chinchwad": 45,
      // Define fares for other combinations as needed
    }
  },
  {
  id:5,
  name:"344",
  route:["Alandi","Sambhaji Chowk","Navin S.T. Stand","Dehu Phata","Kalewadi Pump","Kate Vasti","Kate Colony","Charholi Phata","Chovisawadi Fata","Wadmukhwadi Fata",
  "Sankalp Garden","Balaji Mandri","Sai Mandir","Sayajinath Maharaj School","Magine","Shri Sant Gajanan Maharaj Nagar","Ganesh Nagar","Phuge wasti","Banacha Odha",
  "S.P.G. School","Shastri Chowk","Maharashtra Chowk","Bhosari Gaon","Gavhane Vasti","Bhaji Mandai Gwahade Basti","Swami Samarth","Landewadi Chowk","Telco Road Corner",
  "Philips Company","MIDC Bhosati","Phulenagar Bhosari Midc","Y.C.M. Hospital","Y.C.M.(Sant Tukaram Nagar)","Maheshnagar","Nehru Nagar Corner","H.A. Corner","Kamgar Nagar",
  "Gandi Nagar","Mahindra Company","Pimpri Road","Pimpri Chowk","Gokul Hotel","Pimpri Bridge","Shagun Chowk","Karachi Chowk","Jijamata Hospital","Shantivan Society",
  "Krushna Mandri Corner","Ingle Hospital","Kalewadi Main","Hanuman Mandir Kalewadi","MM School","Tapkir Chowk","Dhangar Baba","Shri Nagar","kalewadi Phata","Niasrg Society",
  "Manapa Shala Wakad","Kaspatevasti","Mankar Chowk","Choundhe Shala","Nandgude Shala","Vilas Nandgude Niwas","Jagdhmba Hotel","Shikshal Society","Ingwale Chowk Corner",
  "Pimple Nilakh","Nilkeshwar Mandir","Takle Chowk","Jupiter Hospital","Balewadi Phata","Prabhabvee Tech Park","Ganraj Mangal Karyalay","Baner Road/Emperor Hotel","Insurance Company","Baner Depot/D Mart"],
  
  fares:{}
},
{
  id:6,
  name:"323A",
  route:["Pune Manapa Bus Station","Manapa Nadi Kinari(2)","Manapa","Shivaji Putla","Shimla Office","Ganesh Khind Road","Patil Estate","Labour Office(Shopper Stop)",
  "Wakdewadi(Bajaj Showroom)","Mari Aai Gate","Poultry Farm Mumbai Road","Sarvatra Vihar","Khadki Post","Factory Hospital","Khadki Railway Station","Gopi Chaul",
  "Bopodi","CME Dapodi","Dapodi","Phugewadi","Atlas Copco","Alfa Laval Company","Forbes Marshall","Kasarwadi","Nashik Phata","Vallabh Nagar Chowl",
  "Vallabh Nagar S.T. Stand","Tukaram Putla","Y.C.M.","Maheshnagar","Nehru nagar","Zero Boys Bakery","Swapn Nagri","Annasaheb Magar Stadium","Yashwant Nagar Telco Road",
  "Telco Company","K.S.B. Chowk","Shahu Nagar Bus Station","Bahirwade Kridangan","Mahabali Chowk","Shani Madnir","Shivtej Nagar Chowk","Newale Chowk","Sharad Nagar",
  "Gharkul Bus Stop No.1"],

  fares:{}
}
  // Add more buses with their routes as needed
];

// Function to generate reverse route
function getReverseRoute(route) {
  return route.slice().reverse();
}

// this is try
// Function to preprocess fares and add reverse combinations
// Function to preprocess fares and add reverse combinations
function preprocessFares() {
  availableBuses.forEach(function(bus) {
    var newFares = {};
    Object.keys(bus.fares).forEach(function(key) {
      newFares[key] = bus.fares[key];
      var stops = key.split("-");
      var reverseKey = stops[1] + "-" + stops[0];
      if (!bus.fares.hasOwnProperty(reverseKey)) {
        // Add reverse combination only if it doesn't already exist
        newFares[reverseKey] = bus.fares[key];
      }
    });
    bus.fares = newFares; // Replace original fares with processed fares
  });
}

// this is try ends here from line 58


// Populate dropdown lists with stops
var boardingSelect = document.getElementById("boardingStop");
var destinationSelect = document.getElementById("destinationStop");

stops.forEach(function(stop) {
  var option = document.createElement("option");
  option.text = stop;
  option.value = stop;
  boardingSelect.add(option);
  
  option = document.createElement("option");
  option.text = stop;
  option.value = stop;
  destinationSelect.add(option);
});

// Call the preprocessFares function to preprocess the fares data
preprocessFares();

function showAvailableBuses() {
  var boardingStop = document.getElementById("boardingStop").value;
  var destinationStop = document.getElementById("destinationStop").value;
  
  var filteredBuses = availableBuses.filter(function(bus) {
    // Check if both boarding and destination stops are in the bus route
    var boardingIndex = bus.route.indexOf(boardingStop);
    var destinationIndex = bus.route.indexOf(destinationStop);
    
    if (boardingIndex !== -1 && destinationIndex !== -1 && boardingIndex < destinationIndex) {
      return true; // For forward route
    } else {
      var reverseRoute = getReverseRoute(bus.route);
      boardingIndex = reverseRoute.indexOf(boardingStop);
      destinationIndex = reverseRoute.indexOf(destinationStop);
      return boardingIndex !== -1 && destinationIndex !== -1 && boardingIndex < destinationIndex; // For reverse route
    }
  });
  
  var busList = "<h2>Available Buses</h2>";
  if (filteredBuses.length > 0) {
    busList += "<ul>";
    filteredBuses.forEach(function(bus) {
      var fare = calculateFare(boardingStop, destinationStop, bus);
      busList += "<li>" + bus.name + " - Fare: $" + fare + "</li>";
    });
    busList += "</ul>";
  } else {
    busList += "<p>No buses available for the selected stops.</p>";
  }

  document.getElementById("availableBuses").innerHTML = busList;
}


// Function to calculate fare based on the chosen stops and bus route
function calculateFare(boardingStop, destinationStop) {
  for (var i = 0; i < availableBuses.length; i++) {
    var bus = availableBuses[i];
    // Check if the boarding and destination stops are in the bus route
    if (bus.route.includes(boardingStop) && bus.route.includes(destinationStop)) {
      // Calculate fare based on the direction of travel in the bus route
      var boardingIndex = bus.route.indexOf(boardingStop);
      var destinationIndex = bus.route.indexOf(destinationStop);
      
      // Determine the direction of travel based on the stop indices
      if (boardingIndex < destinationIndex) {
        var fareKey = boardingStop + "-" + destinationStop;
      } else {
        // If stops are in reverse order, calculate fare using reverse route
        var reverseRoute = getReverseRoute(bus.route);
        var reverseBoardingIndex = reverseRoute.indexOf(boardingStop);
        var reverseDestinationIndex = reverseRoute.indexOf(destinationStop);
        var fareKey = reverseRoute.slice(reverseBoardingIndex, reverseDestinationIndex + 1).join('-');
      }

      // Check if fare is defined for the specific combination
      if (bus.fares.hasOwnProperty(fareKey)) {
        return bus.fares[fareKey];
      } else {
        // If fare is not defined for the specific combination, you can handle it accordingly.
        // For example, you can return a default fare or display an error message.
        return "Fare not available";
      }
    }
  }
  return "No direct bus available";
}

/* 
// Function to calculate fare based on the chosen stops and bus route
function calculateFare(boardingStop, destinationStop) {
  // Find the indices of the boarding and destination stops in the stops array
  var boardingIndex = stops.indexOf(boardingStop);
  var destinationIndex = stops.indexOf(destinationStop);

  // Check if both stops are valid
  if (boardingIndex !== -1 && destinationIndex !== -1) {
    // Retrieve the fare from the 2D array using the indices
    var fare = fares[boardingIndex][destinationIndex];
    if (fare !== undefined) {
      return fare;
    } else {
      // If fare is not defined for the specific combination, you can handle it accordingly.
      // For example, you can return a default fare or display an error message.
      return "Fare not available";
    }
  } else {
    // Handle the case if one or both stops are invalid
    return "Invalid stops";
  }
}
*/

/*
function calculateFare(boardingStop, destinationStop, bus) {
  // Find the indices of the boarding and destination stops in the route array
  var boardingIndex = bus.route.indexOf(boardingStop);
  var destinationIndex = bus.route.indexOf(destinationStop);

  // Check if both stops are valid
  if (boardingIndex !== -1 && destinationIndex !== -1) {
    // Retrieve the fare from the 2D array using the indices
    var fare = bus.fares[boardingIndex][destinationIndex];
    if (fare !== undefined) {
      return fare;
    } else {
      // If fare is not defined for the specific combination, handle it accordingly.
      return "Fare not available";
    }
  } else {
    // Handle the case if one or both stops are invalid
    return "Invalid stops";
  }
}
*/