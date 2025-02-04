var g_dictReplace = {
 	'3flo ([1-3]b[~|>|<][0-9]s)': 'exécution au 3flo : $1',
 	' ([1-3])b~([0-9])s': ' $1 boules tenues environs $2 secondes',
 	' ([1-3])b>([0-9])s':' $1 boules tenues plus de $2 secondes',
 	' ([1-3])b<([0-9])s':' $1 boules tenues moins de $2 secondes',
 	'PM>([0-9]+)m':'périmètre de marche supérieur à $1 mètres',
	'PM~([0-9]+)m':'périmètre de marche d\'environs $1 mètres',
	'(Wexp[p|r]{0,1})([0-9]+)': '$1, temps expiratoire maximal de $2 secondes',
	'/([0-9]{1,2})L': 'à $1L d\'O2 / min',
	'RD/([0-9]{1,2})/([0-9]{1,2})': '(réglages machine utilisé pour le drainage: AI $1cmH2O / PEP $2cmH2O)',
	'R/([0-9]{1,2})/([0-9]{1,2})': '(réglages machine utilisé: AI $1cmH2O / PEP $2cmH2O)',
	'ARTH/([0-9]+)/([-]{0,1}[0-9]+)': 'ARTH (réglages: flexion à $1 degrés, extension à $2 degrés)',
	'TINET/([0-9]+)': 'TINET à $1/28',
	'([0-9]+)S([0-9]+)R': '$1 séries de $2 répétitions',
	'/EDS1000': 'équilibre dynamique précaire, marche avant possible mais marches latérale, arrière et changements de direction impossibles',
	'/EDS1100': 'équilibre dynamique précaire, marches avant et latérale possibles mais marches arrière et changements de direction non sécurisés',
	'/EDS1110': 'équilibre dynamique correct, marches avant, latérale et arrière possibles mais changements de direction instables',
	'/EDS1111': 'équilibre dynamique stable, marches avant, latérale, arrière et changements de direction sécurisés',
	'MRC/([0-9]{1,2})/([0-9]{1,2})/([0-9]{1,2})/([0-9]{1,2})/([0-9]{1,2})/([0-9]{1,2})/([0-9]{1,2})': 'score sur l\'échelle neuromusculaire .MRC (Medical Research Council): \n\n- Membre supérieur droit: $1/15\n- Membre inférieur droit: $2/15\n==> Total côté droit à $3/30\n\n- Membre supérieur gauche: $4/15 \n- Membre inférieur gauche: $5/15\n==> Total côté gauche à $6/30\n\nScore MRC total à $7/60\n',
	'MRC/([0-9]{1,2})/([0-9]{1,2})/([0-9]{1,2})': 'score sur l\'échelle neuromusculaire .MRC (Medical Research Council): \n- $1/30 à droite\n- $2/30 à gauche \n==> Total de $3/60',
	//'MRC/D/([0-5])/([0-5])/([0-5])/([0-5])/([0-5])/([0-5])/G/([0-5])/([0-5])/([0-5])/([0-5])/([0-5])/([0-5]+)/TD/([0-9]+)/TG/([0-9]+)/T/([0-9]+)': '',
	'encproxA': 'encprox audible',
	'encprox': 'encombrement proximal',
	'encdist':'encombrement distal',
	'encdiff': 'encombrement diffus',
	'MODAVDA': 'MODAV type DA',
	'WRVTPAI': 'WW RVTPAI',
	'1ARTH': 'Mise à disposition de l\'arthromoteur en chambre et réglage pour adaptation au patient',
	'Vt max': 'Vt maximal',
	'/trach': 'trachéotomie',
	'ARTH': 'installation du patient sur l\'arthromoteur',
	'RVTPAI': 'RVTP en mode VS-AI-PEP',
	'ESCOKD': 'escaliers exécutés de façon sécurisée rampe a droite a la montée comme à son domicile',
	'ESCOKG': 'escaliers exécutés de façon sécurisée rampe à gauche à la montée comme à son domicile',
	'EMODAV': 'exécution des MODAV',
	'KPPPE': 'kinésithérapie respiratoire pré, per et post-extubation',
	'PADENC': 'pas d\'encombrement perçu',
	'(/ES[BUA])00': '$1 instable sous déstabilisations intrinsèques et extrinsèques',
	'/ESB/([0-9]+)/([0-9]+)/([0-9]+)/([0-9]+)': 'équilibre statique bipodal:\n- position pieds écartés et yeux ouverts maintenus $1 secondes,\n- position pieds écartés yeux fermés maintenus $2 secondes,\n- position pieds serrés yeux ouverts maintenu $3 secondes,\n- position pieds serrés yeux fermés maintenus $4 secondes',
	'/ESBT/([0-9]+)/([0-9]+)': 'équilibre statique bipodal en position tandem maintenu $1 secondes à gauche et $2 à droite',
	'(/ES[BUA])10': '$1 stable sous déstabilisations intrinsèques mais pas sous déstabilisations extrinsèques',
	'(/ES[BUA])11': '$1 stable sous déstabilisations intrinsèques et extrinsèques',
	'/ESU/([0-9]+)/([0-9]+)': '/ESU tenu $1 secondes à gauche et $2 secondes à droite',
	'TUG/([0-4])/([0-9]+)':'TUG à $1/4 en $2 secondes',
	'motomedP/([0-9]+)/([0-9]+)/([0-9]+)': 'motomed en mode passif:\n- Durée de $1 minutes\n- Distance de $2 km\n- Vitesse moyenne de $3 tours / min\n',
	'motomedA/([0-9]+)/([0-9]+)/([0-9]+)/([0-9]+)/([0-9]+)': 'motomed en mode actif:\n- Résistance à $3\n- Durée de $1 minutes\n- Distance de $2 km\n- Symétrie:  $4% à droite / $5% à gauche\n',
	'motomedP': 'motomed en mode passif',
	'motomedA': 'motomed en mode actif',
	'Vt moy': 'volume courant moyen',
	'Vt max': 'volume courant maximal',
	'PCCCD': 'précautions complémentaires contact .Clostridium .Difficile',
	'/DEGS': 'déglutition spontanée',
	'/DEGV': 'déglutition volontaire',
	'TINET': 'test de Tinetti',
	'OCONF': 'objectif de confort avant tout',
	'WRVTP': 'travail de RVTP',
	'MODAV': 'modalités ventilatoires',
	'KRDAI': 'KRD en mode VS-AI-PEP',
	'TMBNT': 'TBM non acquis, tendance aux torsions rachidiennes',
	'TMBOK': 'TMB correctement exécuté',
	'PNMAR': 'prévention du risque de survenue de NMAR',
	'EAMFT':'EAMF4 et du cou',
	'APLTT': 'APLT DC ABDL et ABDL debout',
	'O2REQ': 'oxygéno-réquérance',
	'1LVOK': '1er lever effectué',
	'ESCOK': 'escaliers exécutés de façon sécurisée',
	'ABABP': 'attelle BABP',
	'WRVTP': 'travail de recrutement des volumes thoraco-pulmonaires',
	'WRVMQ': 'WRVM du quadriceps',
	'RVTPC': 'RVTP correct',
	'RVTPR':'RVTP réduit',
	'EAMF4': 'entretient articulaire et myofascial des 4 membres',
	'WRMG4': 'travail de RMG4',
	'percu': 'perçu',
	'Wexpp': 'Wexp  via bocal de Plent',
	'Wexpr': 'Wexp  via spiromètre type Respirex',
	'/SYGIE': 'sympomatologie',
	'sp[o|O][2|é]': 'SpO2 moyenne',
	'WDTT': 'WDT DC ABDL et ABDL debout',
	'AET-P': 'AET peu productive',
	'AETP': 'AET productive',
	'AETN': 'AET non productive',
	'DCICs':'douleurs en regard des cicatrices',
	'DCIC': 'douleurs en regard de la cicatrice',
	'puru': 'purulentes',
	'KRDP': 'KRD passive',
	'SAOS': 'syndrome d\'apnée obstructive du sommeil',
	'CTEP': 'ceinture de maintient thoracique en place',
	'AFSD': 'avec fauteuil qui suit derrière',
	'NDAF': 'pas de désaturation à l\'effort',
	'CAEP': 'ceinture de maintient abdominal en place',
	'NMAR': 'neuromyopathie acquise en réanimation',
	'ASPL': 'autonome sur le plan locomoteur',
	'LHID': 'lutte contre l\'hyperinflation dynamique',
	'RVTP': 'recrutement des volumes thoraco-pulmonaires',
	'EAEV': 'explication des AEV',
	'EAEM': 'explication des AEM',
	'TDM6': 'Test De Marche de 6 minutes (TDM6 / 6MWT)',
	'Wexp':'travail expiratoire avec PEEP',
	'PEEP': 'pression expiratoire positive',
	'FEVG': 'fraction d\'éjection du ventricule gauche',
	'FEVD': 'fraction d\'éjection du ventricule droit',
	'/MRC':'score sur l\'échelle neuromusculaire .MRC (Medical Research Council)',
	'ECBC': 'examen cyto-bactérien des crachats',
	'RIMA': 'rappel de l\'importance de la mobilisation active et des changements de position sur le pronostic',
	'ATCD': 'antécédents',
	'TPHA':'très probable HA',
	'HFNC/([0-9]+)/([0-9]+)': 'canules nasales haut débit (optiflow) à débit $1 L/min et FiO2 $2%',
	'HFNC': 'canules nasales haut débit (Optiflow + ventilateur adapté)',
	'AUTO': 'autonome',
	'APLT': 'autonome pour les transferts',
	'ANTe': 'antérieur',
	'ABDL': 'assis bord de lit',
	'CATB': 'cure t\'antibiotiques',
	'IRnA': 'insuffisance rénale aiguë',
	'IRnC': 'insuffisance rénale chronique',
	'PPSE': 'problématique psycho-socio-économique',
	'CTCP': 'complexe tricipito-calcanéo-plantaire',
	'TBEMV': 'très bonne execution des modalités ventilatoires',
	'NEMV': 'pas d\'exécution des modalités ventilatoires',
	'SEMV': 'exécution des modalités ventilatoires sommaire',
	'BEMV': 'bonne exécution des modalités ventilatoires',
	'EAMF': 'entretient articulaire et myofascial',
	'RMG4': 'renforcement musculaire gymnique des 4 membres',
	'TPAE': 'TP acquise et efficace',
	'CTCP': 'complexe talo-calcanéo-pédieux',
	'TPAN': 'TP acquise mais non efficace',
	'RCPP': 'rappel des consignes pro-prophylactique',
	'CHPD': 'Cotation de Held et Pierrot-Desseilligny',
	'CTCP': 'complexe talo-calcanéo-pédieux',
	'WRVM': 'travail de réveil musculaire',
	'MOBA': 'mobilisation articulaire',
	'POST': 'postérieur',
	'LPFx': 'lombo-pelvi-fémoraux',
	'CTSB': 'cervico-thoraco-scapulo-brachial',
	'AAVQ ': 'autonome pour les activités de la vie quotidienne (habillage, toilette, alimentation, déplacements dans son domicile)',
	'ACFA': 'arythmie complète par fibrillation atriale',
	'RAEV': 'rappel des AEV',
	'RAEM': 'rappel des AEM',
	'WQQM': 'travail qualitatif et quantitatif de la marche',
	'WESD': 'travail de l\'équilibre statique et dynamique',
	'FHME': 'filtre échangeur de chaleur et d\'humidité (HME)',
	'KRDD': 'kinésithérapie respiratoire douce',
	'NPEC': 'pas de prise en charge',
	'MADD':'maintient à domicile difficile',
	'AOMI': 'artérite oblitérante des membres inférieurs',
	'MVDA':'modalités ventilatoires type DA',
	'PCSC': 'précautions complémentaires spécifiques COVID+',
	'RTMB': 'révision de la réalisation du TMB',
	'SDRA': 'syndrome de détresse respiratoire aiguë',
	'RALO2': 'rallonge à oxygène',
	'RACO2': 'raccord à oxygène',
	'FAUD': 'fauteuil qui suit derrière',
	'VSAI': 'en mode VS-AI-PEP',
	'APEC': 'arret de prise en charge',
	'NPEC': 'pas de prise en charge',
	'KRT': 'ventilation dirigée, kinésithérapie respiratoire de drainage et aide à la toux',
	'/OVVE': 'optimisation ventilatoire compte tenu de l\'objectif d\'extubation',
	'/TDEG': 'troubles de la déglutition',
	'TMBN': 'TMB non acquis',
	'WRMG': 'travail de renforcement musculaire gymnique',
	'NFEA': 'pas de frein inspiratoire audible à l\'auscultation trachéale',
	'FEA': 'frein inspiratoire audible à l\'auscultation trachéale',
	'/EXE': 'exécution',
	'/ESC': 'escaliers',
	'/ABD': 'abduction',
	'/ADD': 'adduction',
	'ADK': 'adénocarcinome',
	'DRA': 'détresse respiratoire aiguë',
	'AEV': 'auto-exercices ventilatoires',
	'ESV': 'épreuve de sevrage ventilatoire',
	'MOB': 'mobilisation',
	'AAE': 'attelle anti-équin',
	'AEM': 'auto-exercices moteurs',
	'EMV': 'exécution des modalités ventilatoires',
	'ESM': 'évaluation subjective manuelle',
	'AFE': 'accélération du flux expiratoire',
	'ROS': 'réponse aux ordres simples',
	'ROT': 'réflexes ostéo-tendineux',
	'DCD': 'décédé',
	'BEX': 'bonne exécution',
	'NEX': 'pas d\'exécution',
	'SEX': 'exécution sommaire',
	'/SM4': '/SM des 4 membres',
	'DAF': 'désaturation à l\'effort',
	'/PDP': 'pointes de pieds',
	'/OV': 'optimisation ventilatoire',
	'/OPT': 'optimisation',
	'FEA':'frein expiratoire audible',
	'EOC': 'écharpe orthopédique capitonnée',
	'AEG': 'altération de l\'état général',
	'ATC': 'articulation talo-crurale',
	'KAA': 'kinésithérapie active aidée',
	'WSM': 'travail du schéma de marche',
	'HAT': 'habillage, toilette, alimentation',
	'SMP': 'schéma de marche perturbé',
	'SMC': 'schéma de marche correct',
	'ACR': 'arrêt cardio-respiratoire',
	'AAA': 'anévrisme de l\'aorte abdominale',
	'PTH': 'prothèse totale de hanche',
	'PTG': 'prothèse totale de genou',
	'PTE': 'prothèse totale d\'épaule',
	'SCC': 'sterno-costo-claviculaire',
	'LT2':'lag test positif des 2 côtés',
	'LT0':'lag test négatif des 2 côtés',
	'LTD':'lag test positif à droite mais pas à gauche',
	'LTG':'lag test positif à gauche mais pas à droite',
	'VAS':'voies aériennes supérieures',
	'VAI':'voies aériennes inférieures',
	'SST': 'scapulo-serrato-thoracique',
	'ATF': 'attelle thermo-formée',
	'LAT': 'latéral',
	'RAS':'rien à signaler',
	'PAM': 'pression artérielle moyenne',
	'PAS': 'pression artérielle systolique',
	'PAD': 'pression artérielle diastolique',
	'MAD': 'mise à disposition',
	'MEP': 'mise en place',
	'TCP':  'tricipito-calcanéo-plantaire',
	'OLD': 'oxygénothérapie longue durée',
	'/SS0': 'sécrétions muqueuses fluides / salivaires',
	'/SS1': 'sécrétions muqueuses épaisses',
	'/SS2': 'sécrétions muco-purulentes',
	'/SS3': 'sécrétions purulentes',
	'/ESB': 'équilibre statique debout bipodal',
	'/ESU': 'équilibre statique debout unipodal',
	'/ESA': 'équilibre statique assis',
	'/ETP': 'explication de la TP',
	'/PSE': '/PS élargi',
	'/DEGOK': 'déglutition efficace',
	'/DEGKO': 'déglutition non efficace',
	'/DEG': 'déglutition',
	'PSE': 'psycho-socio-économique',
	'/PS([0-9]+)': '/PS large d\'environs $1cm',
	'TVP': 'thrombose veineuse profonde',
	'MED': 'médial',
	'ANP': 'apiration naso-pharyngée',
	'AOP': 'aspiration oro-pharyngée',
	'OAP': 'oedeme aigu du poumon',
	'/FSD': 'fléchisseur superficiel des doigts',
	'/FPD': ' fléchisseur profond des doigts',
	'::C': 'correct',
	'::T': 'transfert',
	'/RCS':'rachis cervical supérieur',
	'/RCI':'rachis cervical inférieur',
	'PHA': 'probable HA',
	'SHA': 'solution hydro-alcoolique',
	'ANT': 'aspiration naso-trachéale',
	'IOT': 'intubation oro-trachéale',
	'INT': 'intubation naso-trachéale',
	'EPA': 'équilibre postural assis',
	'PPS': 'pieds à plat au sol',
	'HID': 'hyperinflation dynamique',
	'KRD': 'kinésithérapie respiratoire de drainage',
	'KRI': 'kinésithérapie respiratoire incitative',
	'AAT': 'aide à la toux',
	'AET': 'aspiration endotrachéale',
	'CEO': 'cohérent et orienté',
	'RTP': 'révision de la toux protégée',
	'WDT': 'travail des transferts',
	'VVP': 'voie veineuse périphérique',
	'SOH': ' syndrome d\'obésité-hypoventilation',
	'MPA': 'maladie de Parkinson',
	'TUG':'Timed Up And Go Test (TUG)',
	'/ES': 'équilibre statique',
	'/ED': 'équilibre dynamique',
	'/SS': 'sécrétions',
	'R2R': ' rollator 2 roues',
	'R3R': ' rollator 3 roues',
	'R4R': ' rollator 4 roues',
	'CDM': 'cadre de marche',
	'MMC': 'masque à moyenne concentration',
	'TSS': 'tirage supra-sternal',
	'MHC': 'masque à haute concentration',
	'SNG': 'sonde naso-gastrique',
	'PNF': 'facilitation proprioceptive neuromusculaire (PNF)',
	'WRM': 'travail de renforcement musculaire',
	'RMG': 'renforcement musculaire gymnique',
	'PNO': 'pneumothorax',
	'PNP': 'pneumopathie',
	'PAP': 'pied à perfusion',
	'CDB': 'collapsus dynamique bronchique',
	'PEC': 'prise en charge',
	'VRE': 'volume de réserve expiratoire',
	'VRI': 'volume de réserve inspiratoire',
	'CPT': 'capacité pulmonaire totale',
	'ATB': 'antibiotique',
	'RAD': 'retour à domicile',
	'ESD': 'équilibre statique et dynamique',
	'SSH': 'sérum salé hypertonique',
	'EVA': 'sur l\'échelle visuelle analogique',
	'PCC': 'précautions complémentaires contact',
	'PCG': 'précautions complémentaires gouttelettes',
	'/RCG': 'rétropulsion posturale, centre de gravité postériorisé',
	'SRP': 'syndrome de rétropulsion posturale',
	'PLM': 'protocole lésé médullaire',
	'FAT': 'fatigable',
	'SPC': 'syndrome post-chute',
	'AVQ': 'activités de la vie quotidienne',
	'THB([0-9]+)':'taux d\'hémoglobine de $1g / 100mL',
	'THB': 'taux d\'hémoglobine',
	'FHA': 'friction avec solution hydro-alcoolique',
	'EEG': 'électro-encéphalogramme',
	'TSg': 'transfusion sanguine',
	'PCA': 'précautions complémentaires air',
	'MAD': 'mise à disposition',
	'CEM': 'ce matin',
	'CAM': 'cette après-midi',
	'TEM': 'toux émétisante',
	'PCP': 'précautions complémentaires protectrices',
	'IRC': 'insuffisance respiratoire chronique',
	'IRA': 'insuffisance respiratoire aiguë',
	'1LV': '1er lever',
	'BAV': 'bloc atrio-ventriculaire',
	'WPM': 'travail du périmetre de marche',
	'TMB': 'transfert monobloc',
	'/POP': 'praxie oro-pharyngée',
	'/TF': 'triple flexion',
	'/TE':  'triple extension',
	'/TC':  'talo-crural',
	'ATC': 'articulation talo-crurale',
	'VS([^-])': 'ventilation spontanée$1',
	'LPF': 'lombo-pelvi-fémoral',
	'/SB': 'squats bipodaux',
	'/RL': 'rotation latérale',
	'/RM': 'rotation médiale',
	'/PS': 'prono-supination',
	'/SM': 'stimulation motrice',
	'/BT': 'bonne tolérance',
	'TD': 'toux dirigée',
	'KP': 'kinésithérapie passive',
	'KA': 'kinésithérapie active',
	'NDLse': 'non douloureuse',
	'NDLX': 'non douloureux',
	'DLX': 'douloureux',
	'RXC': 'radiographie de contrôle',
	'DLse': 'douloureuse',
	'DL': 'douleur',
	'CJ': 'ce jour',
	'SB': 'spasticité bronchique',
	'FR': 'fréquence respiratoire',
	'VD': 'ventilation dirigée',
	'TP': 'toux protégée',
	'/RP':'rétropulsion posturale',
	'RP':'radiographie pulmonaire',
	'PB': 'plexus brachial',
	'PL': 'plexus lombal',
	'PS': 'plexus sacral',
	'DC': 'décubitus',
	'PM': 'périmètres de marche',
	'CN': 'canules nasales',
	'TC': 'test de comptage',
	'LC': 'latéro-cubitus',
	'PC': 'pro-cubitus',
	'SM': 'schéma de marche',
	'FC': 'fréquence cardiaque',
	'SN': 'sonde nasale d\'O2',
	'en AA': 'en air ambiant',
	'AA': 'amplitudes articulaires',
	'EN': 'sur l\'échelle numérique simple',
	'HB': 'hémoglobine',
	'LT': 'lag test',
	'/CRDs': 'expectorations dégluties',
	'/CRD': 'expectoration déglutie',
	'/CR': 'expectoration',
	'/RC': 'rachis cervical',
	'DA': 'drainage autogène',
	'TA': 'tension artérielle',
	'MV': 'murmure vésiculaire',
	'AT': 'aide technique',
	'LP': 'lève-personne',
	'AR': 'allers-retours',
	'FE': 'fixateur externe',
	'MI': 'membre inférieur',
	'CS': 'canne simple',
	'CA': 'cannes anglaises',
	'CI': 'capacité inspiratoire',
	'HA':'hypopnée algogène',
	'VR': 'volume résiduel',
	'TS': 'toux spastique',
	' D([1-3])': ' degré $1',
	'Vt': 'volume courant',
	'CV': 'capacité vitale',
	'MC': 'masque chirurgical',
	'MS': 'membre supérieur',
	'SU': 'sonde vésicale urinaire',
	'RM': 'renforcement musculaire',
	'/SP': 'stase pharyngée',
	'MK': 'kinésithérapeute',
	'FP': 'femoro-patellaire',
	'LP': 'lève-personne',
	'/PS': 'polygone de sustentation',
	'/CG': 'centre de gravité',
	'FT': 'femoro-tibial',
	'LV': 'lever',
	'KR': 'kinésithérapie respiratoire',
	'RX': 'radiographie',
	'CF': 'coxofémoral',
	'GH': 'glénohuméral',
	'KM': 'kinésithérapie motrice',
	'WW': 'travail de',
	'/D': 'droit',
	'/G': 'gauche',
	'/F': 'flexion',
	'/E': 'extension',
	'/R': 'rotation',
	'/I': 'inclinaison',
};

var g_dictCorrect = {
	'membre supérieurs':'membres supérieurs',
	'membre inférieurs': 'membres inférieurs',
	' 1 secondes': ' 1 seconde',
	' 1 boules': ' 1 boule',
	' 1 boule tenues': ' 1 boule tenue',
	' 1 mètres': ' 1 mètre',
	'1 cannes anglaises': '1 canne anglaise',
	'1 allers-retours': '1 aller-retour',
	'secretions': 'sécrétions',
	'Execution': 'Exécution',
	'execution': 'exécution',
	'deglutition': 'déglutition',
	'legerement': 'légèrement',
	'1 séries': '1 série',
	'1 répétitions': '1 répétition',
};
