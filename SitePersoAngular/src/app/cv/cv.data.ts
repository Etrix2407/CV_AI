import { Cv } from './cv.model';

/** Contenu du CV — seule source du texte affiché (repris de legacys/content/cv.md). */
export const CV: Cv = {
  name: 'Ethan Nickels',
  title: 'Développeur IA junior · Machine learning & agents LLM',
  photo: 'images/photo.jpg',

  contacts: [
    { kind: 'email', label: 'ethannickels2@gmail.com', href: 'mailto:ethannickels2@gmail.com' },
    { kind: 'phone', label: 'demandez-moi' },
    { kind: 'address', label: '6630 Martelange, Belgique' },
    {
      kind: 'linkedin',
      label: 'www.linkedin.com/in/ethan-nickels',
      href: 'https://www.linkedin.com/in/ethan-nickels',
    },
    { kind: 'github', label: 'github.com/Etrix2407', href: 'https://github.com/Etrix2407' },
  ],

  sections: [
    { id: 'projets', title: 'Projets' },
    { id: 'profil', title: 'Profil' },
    { id: 'formation', title: 'Formation' },
    { id: 'experiences', title: 'Expériences' },
    { id: 'competences', title: 'Compétences' },
    { id: 'centres-d-interet', title: "Centres d'intérêt" },
  ],

  projects: [
    {
      name: 'Prédiction de revenus – dataset Adult',
      stack: ['Python', 'pandas', 'scikit-learn'],
      repoUrl: 'https://github.com/Etrix2407/examen_ML/tree/main/adult',
      highlights: [
        [
          {
            text: 'Prédit si un revenu dépasse 50 000 $/an à partir de 48 842 profils de recensement',
          },
        ],
        [
          {
            text: '6 combinaisons sélection de variables × modèle comparées (arbre de décision, KNN, Random Forest)',
          },
        ],
        [
          { text: "85,6 % d'accuracy et ROC-AUC de 0,91", strong: true },
          { text: ' sur 16 281 profils jamais vus par le modèle' },
        ],
      ],
    },
    {
      name: "Classification d'articles par embeddings",
      stack: ['Python', 'Sentence-Transformers', 'FAISS', 'PCA'],
      repoUrl: 'https://github.com/Etrix2407/examen_ML/tree/main/classification_article',
      highlights: [
        [{ text: 'Classe automatiquement un document Word en article de sport ou de cuisine' }],
        [
          {
            text: 'Base vectorielle FAISS de 20 phrases de référence encodées en 384 dimensions (all-MiniLM-L6-v2)',
          },
        ],
        [
          {
            text: "Articles de test sport et cuisine correctement classés à l'unanimité",
            strong: true,
          },
          { text: ' (5 plus proches voisins sur 5)' },
        ],
      ],
    },
    {
      name: 'Agent IA de gestion de tâches',
      stack: ['Python', 'Google ADK', 'LiteLLM', 'Ollama'],
      repoUrl: 'https://github.com/Etrix2407/examen_ML/tree/main/todo_agent',
      highlights: [
        [
          {
            text: 'Gère une to-do list en langage naturel avec un LLM exécuté en local (qwen3:4b)',
          },
        ],
        [
          { text: '8 outils', strong: true },
          {
            text: ' Python pilotés par une boucle agentique ReAct (CRUD, tri par priorité, regroupement par tag)',
          },
        ],
      ],
    },
  ],

  profile: [
    { text: 'Je recherche un poste de ' },
    { text: 'Développeur IA junior', strong: true },
    {
      text: ' (CDI ou CDD) dès janvier 2027, avec une stack Python, pandas, scikit-learn, embeddings (FAISS) et agents LLM (Google ADK).',
    },
  ],

  education: [
    { period: 'En cours', degree: 'formation en Développement IA', school: 'Technobel' },
    {
      period: '2024 | 2026',
      degree: 'Bachelier en informatique, orientation Intelligence Artificielle',
      school: 'IESN, Namur',
    },
    { period: '2021 | 2022', degree: 'Bachelier en comptabilité', school: 'Henallux, Arlon' },
    { period: '2020 | 2021', degree: 'Ingénieur de gestion', school: 'Solvay, Bruxelles' },
    { period: '2020', degree: 'CESS', school: 'École Libre de Lorraine, Messancy' },
  ],

  experiences: [
    {
      role: 'Jobiste – Service pharmacie',
      employer: 'CHdN',
      date: 'Août 2022',
      description: 'préparations et gestion des stocks',
    },
    {
      role: 'Jobiste – Service logistique',
      employer: 'CHdN',
      date: 'Août 2020',
      description: 'stockage et distribution interne de matériel médical',
    },
    {
      role: 'Caissier',
      employer: 'Delitraiteur',
      date: 'Juillet 2018',
      description: 'accueil clients et encaissements',
    },
    {
      role: 'Technicien de surface',
      employer: 'Sodexo',
      date: 'Janvier 2018',
      description: 'nettoyage en milieu hospitalier',
    },
  ],

  skills: [
    { title: 'Langages', items: ['Python, Java, C', 'HTML, CSS, JavaScript (bases)'] },
    {
      title: 'Machine learning et IA',
      items: [
        'pandas, NumPy, scikit-learn (preprocessing, pipelines, arbres de décision, KNN, Random Forest)',
        'Visualisation : Matplotlib, seaborn',
        'Embeddings (Sentence-Transformers), base vectorielle FAISS, PCA',
        'Agents LLM : Google ADK, LiteLLM, Ollama',
        'IA générative comme assistant de développement',
      ],
    },
    { title: 'Outils', items: ['Git, GitHub', 'Jupyter Notebook'] },
    {
      title: 'Langues',
      items: ['Français : langue maternelle', 'Anglais : niveau B2 (intermédiaire avancé)'],
    },
  ],

  interests: [
    { label: 'Sports', value: 'escalade' },
    { label: 'Informatique', value: 'programmation et jeux de logique' },
  ],
};
