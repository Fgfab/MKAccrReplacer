var g_dictReplace = {
 	'3flo ([1-3]b[~|>|<][0-9]s)': 'exécution au 3flo : $1',
 	' ([1-3])b~([0-9])s': ' $1 boules tenues environs $2 secondes',
 	' ([1-3])b>([0-9])s':' $1 boules tenues plus de $2 secondes',
 	' ([1-3])b<([0-9])s':' $1 boules tenues moins de $2 secondes',
 	'PM>([0-9]+)m':'périmètre de marche supérieur à $1 mètres',
	'PM~([0-9]+)m':'périmètre de marche d\'environs $1 mètres',
	'Wexp([0-9]+)': 'Wexp, temps expiratoire maximal de $1 secondes',
	'/([0-9]{1,2})L': 'à $1L d\'O2 / min',
	'R/([0-9]{1,2})/([0-9]{1,2})': '(réglages machine pour le drainage: AI $1cmH2O / PEP $2cmH2O)',
	'ARTH/([0-9]+)/([-]{0,1}[0-9]+)': 'ARTH (réglages: flexion à $1 degrés, extension à $2 degrés)',
	'/EDS1000': 'équilibre dynamique précaire, marche avant possible mais marches latérale, arrière et changements de direction impossibles',
	'/EDS1100': 'équilibre dynamique précaire, marches avant et latérale possibles mais marches arrière et changements de direction non sécurisés',
	'/EDS1110': 'équilibre dynamique correct, marches avant, latérale et arrière possibles mais changements de direction instables',
	'/EDS1111': 'équilibre dynamique stable, marches avant, latérale, arrière et changements de direction sécurisés',
	'encprox': 'encombrement proximal',
	'encdist':'encombrement distal',
	'MODAVDA': 'MODAV type DA',
	'1ARTH': 'Mise à disposition de l\'arthromoteur en chambre et réglage pour adaptation au patient',
	'Vt max': 'Vt maximal',
	'/trach': 'trachéotomie',
	'ARTH': 'mise en place de l\'arthromoteur',
	'RVTPAI': 'RVTP en mode VS-AI-PEP',
	'ESCOKD': 'escaliers exécutés de façon sécurisée rampe a droite a la montée comme à son domicile',
	'ESCOKG': 'escaliers exécutés de façon sécurisée rampe à gauche à la montée comme à son domicile',
	'PADENC': 'pas d\'encombrement percu',
	'(/ES[BUA])00': '$1 instable sous déstabilisations intrinsèques et extrinsèques',
	'(/ES[BUA])10': '$1 stable sous déstabilisations intrinsèques mais pas sous déstabilisations extrinsèques',
	'(/ES[BUA])11': '$1 stable sous déstabilisations intrinsèques et extrinsèques',
	'/ESU/([0-9]+)/([0-9]+)': '/ESU tenu $1 secondes à G et $2 secondes à De',
	'PCCCD': 'précautions complémentaires contact .Clostridium .Difficile',
	'MODAV': 'modalités ventilatoires',
	'KRDAI': 'KRD en mode VS-AI-PEP',
	'TMBNT': 'TBM non acquis, tendance aux torsions rachidiennes',
	'TMBOK': 'TMB correctement exécuté',
	'APLTT': 'APLT DC ABDL et ABDL debout',
	'1LVOK': '1er lever effectué',
	'ESCOK': 'escaliers exécutés de façon sécurisée',
	'ABABP': 'attelle BABP',
	'WRVTP': 'travail de recrutement des volumes thoraco-pulmonaires',
	'WRVMQ': 'WRVM du quadriceps',
	'RVTPC': 'RVTP correct',
	'RVTPR':'RVTP réduit',
	'EAMF4': 'entretient articulaire et myofascial des 4 membres',
	'percu': 'perçu',
	'_SGIE': 'sympomatologie',
	'sp[o|O][2|é]': 'SpO2 moyenne',
	'RMed': 'rotation médiale',
	'AETP': 'AET productive',
	'puru': 'purulentes',
	'KRDP': 'KRD passive',
	'SAOS': 'syndrome d\'apnée obstructive du sommeil',
	'CTEP': 'ceinture de soutient thoracique en place',
	'CAEP': 'ceinture de soutient abdominal en place',
	'NMAR': 'neuromyopathie acquise en réanimation',
	'ASPL': 'autonome sur le plan locomoteur',
	'LHID': 'lutte contre l\'hyperinflation dynamique',
	'RVTP': 'recrutement des volumes thoraco-pulmonaires',
	'EAEV': 'explication des AEV',
	'EAEM': 'explication des AEM',
	'TDM6': 'Test De Marche de 6 minutes (TDM6 / 6MWT)',
	'Wexp':'travail expiratoire avec PEEP via bocal de Plent ',
	'PEEP': 'pression expiratoire positive',
	'FEVG': 'fraction d\'éjection du ventricule gauche',
	'FEVD': 'fraction d\'éjection du ventricule droit',
	' MRC':' sur l\'échelle MRC (Medical Research Council)',
	'ECBC': 'examen cyto-bactérien des crachats',
	'RIMA': 'rappel de l\'importance de la mobilisation active et des changements de position sur le pronostic',
	'ATCD': 'antécédents',
	'TPHA':'très probable HA',
	'AUTO': 'autonome',
	'APLT': 'autonome pour les transferts',
	'ANTe': 'antérieur',
	'ABDL': 'assis bord de lit',
	'CATB': 'cure t\'antibiotiques',
	'bemv': 'bonne exécution des modalités ventilatoires',
	'EAMF': 'entretient articulaire et myofascial',
	'TPAE': 'TP acquise et efficace',
	'TPAN': 'TP acquise mais non efficace',
	'RCPP': 'rappel des consignes pro-prophylactique',
	'WRVM': 'travail de réveil musculaire',
	'MOBA': 'mobilisation articulaire',
	'POST': 'postérieur',
	'LPFx': 'lombo-pelvi-fémoraux',
	'CTSB': 'cervico-thoraco-scapulo-brachial',
	'WDTT': 'WDT DC ABDL et ADBL debout',
	'ACFA': 'arythmie complète par fibrillation atriale',
	'RAEV': 'rappel des AEV',
	'RAEM': 'rappel des AEM',
	'WQQM': 'travail qualitatif et quantitatif de la marche',
	'WESD': 'travail de l\'équilibre statique et dynamique',
	'MADD':'maintient à domicile difficile',
	'AOMI': 'artérite oblitérante des membres inférieurs',
	'MVDA':'modalités ventilatoires type DA',
	'RTMB': 'révision de la réalisation du TMB',
	'SDRA': 'syndrome de détresse respiratoire aiguë',
	'VSAI': 'en mode VS-AI-PEP',
	'TMBN': 'TMB non acquis',
	'ADK': 'adénocarcinome',
	'DRA': 'détresse respiratoire aiguë',
	'AEV': 'auto-exercices ventilatoires',
	'MOB': 'mobilisation',
	'AAE': 'attelle anti-équin',
	'AEM': 'auto-exercices moteurs',
	'AFE': 'accélération du flux expiratoire',
	'ROS': 'réponse aux ordres simples',
	'ROT': 'réflexes ostéo-tendineux',
	'DCD': 'décédé',
	'FEA':'frein expiratoire audible',
	'KAA': 'kinésithérapie active aidée',
	'WSM': 'travail du schéma de marche',
	'ACR': 'arrêt cardio-respiratoire',
	'AAA': 'anévrisme de l\'aorte abdominale',
	'PTH': 'prothèse totale de hanche',
	'PTG': 'prothèse totale de genou',
	'PTE': 'prothèse totale d\'épaule',
	'SCC': 'sterno-costo-claviculaire',
	'SST': 'scapulo-serrato-thoracique',
	'ATF': 'attelle thermo-formée',
	'LAT': 'latéral',
	'RAS':'rien à signaler',
	'PAM': 'pression artérielle moyenne',
	'PAS': 'pression artérielle systolique',
	'PAD': 'pression artérielle diastolique',
	'MAD': 'mise à disposition',
	'/SS0': 'sécrétions muqueuses fluides / salivaires',
	'/SS1': 'sécrétions muqueuses épaisses',
	'/SS2': 'sécrétions muco-purulentes',
	'/SS3': 'sécrétions purulentes',
	'/ESB': 'équilibre statique debout bipodal',
	'/ESU': 'équilibre statique debout unipodal',
	'/ESA': 'équilibre statique assis',
	'/ETP': 'explication de la TP',
	'TVP': 'thrombose veineuse profonde',
	'MED': 'médial',
	'ANP': 'apiration naso-pharyngée',
	'AOP': 'aspiration oro-pharyngée',
	'OAP': 'oedeme aigu du poumon',
	'::C': ' correct',
	'/T': 'transfert',
	'RCS':'rachis cervical supérieur',
	'RCI':'rachis cervical inférieur',
	'ANT': 'aspiration naso-trachéale',
	'IOT': 'intubation oro-trachéale',
	'INT': 'intubation naso-trachéale',
	'HID': 'hyperinflation dynamique',
	'KRD': 'kinésithérapie respiratoire de drainage',
	'KRI': 'kinésithérapie respiratoire incitative',
	'AAT': 'aide à la toux',
	'AET': 'aspiration endotrachéale',
	'RTP': 'révision de la toux protégée',
	'WDT': 'travail des transferts',
	'VVP': 'voie veineuse périphérique',
	'SOH': ' syndrome d\'obésité-hypoventilation',
	'MPA': 'maladie de Parkinson',
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
	'WRM': 'travail de renforcement musculaire',
	'RMG': 'renforcement musculaire gymnique',
	'PNO': 'pneumothorax',
	'PNP': 'pneumopathie',
	'CDB': 'collapsus dynamique bronchique',
	'PEC': 'prise en charge',
	'VRE': 'volume de réserve expiratoire',
	'VRI': 'volume de réserve inspiratoire',
	'RTP':'rétropulsion posturale',
	'CPT': 'capacité pulmonaire totale',
	'ATB': 'antibiotique',
	'RAD': 'retour à domicile',
	'ESD': 'équilibre statique et dynamique',
	'SSH': 'sérum salé hypertonique',
	'EVA': 'sur l\'échelle visuelle analogique',
	'PCC': 'précautions complémentaires contact',
	'PCG': 'précautions complémentaires gouttelettes',
	'PCA': 'précautions complémentaires air',
	'MAD': 'mise à disposition',
	'PCP': 'précautions complémentaires protectrices',
	'1LV': '1er lever',
	'BAV': 'bloc atrio-ventriculaire',
    'WPM': 'travail du périmetre de marche',
	'TMB': 'transfert monobloc',
	'VS([^-])': 'ventilation spontanée$1',
	'LPF': 'lombo-pelvi-fémoral',
	'TD': 'toux dirigée',
	'KP': 'kinésithérapie passive',
	'KA': 'kinésithérapie active',
	'SB': 'spasticité bronchique',
	'FR': 'fréquence respiratoire',
	'VD': 'ventilation dirigée',
	'TP': 'toux protégée',
	'RP':'RX pulmonaire',
    'PB': 'plexus brachial',
    'PL': 'plexus lombal',
    'PS': 'plexus sacral',
	'DC': 'décubitus',
	'PM': 'périmètres de marche',
	'CN': 'canules nasales',
	'TC': 'test de comptage',
	'LC': 'latéro-cubitus',
	'PC': 'pro-cubitus',
	'FC': 'fréquence cardiaque',
	'SN': 'sonde nasale d\'O2',
	'en AA': 'en air ambiant',
	'AA': 'amplitudes articulaires',
    'EN': 'sur l\'échelle numérique simple',
	'/CR': 'expectorations',
	'DA': 'drainage autogène',
	'TA': 'tension artérielle',
	'MV': 'murmure vésiculaire',
	'AT': 'aide technique',
	'FE': 'fixateur externe',
	'MI': 'membre inférieur',
	'CS': 'canne simple',
	'CA': 'canne anglaise',
	'CI': 'capacité inspiratoire',
	'HA':'hypopnée algogène',
	'VR': 'volume résiduel',
	' D([1-3])': ' degré $1',
	'Vt': 'volume courant',
	'CV': 'capacité vitale',
	'RL': 'rotation latérale',
	'MS': 'membre supérieur',
	'SU': 'sonde vésicale urinaire',
	'RM': 'renforcement musculaire',
	'SP': 'stase pharyngée',
	'MK': 'kinésithérapeute',
	'FP': 'femoro-patellaire',
	'PS': 'polygone de sustentation',
	'FT': 'femoro-tibial',
	'KR': 'kinésithérapie respiratoire',
	'RX': 'radiographie',
	'CF': 'coxofémoral',
	'GH': 'glénohuméral',
	'KM': 'kinésithérapie motrice',
	'WW': 'travail de',
	'D': 'droit',
	'G': 'gauche',
	'membre supérieurs':'membres supérieurs',
	' 1 secondes': ' 1 seconde',
	' 1 boules': ' 1 boule',
	' 1 boule tenues': ' 1 boule tenue',
	' 1 mètres': ' 1 mètre',
	'secretions': 'sécrétions',
	'Execution': 'Exécution',
	'execution': 'exécution',
}
