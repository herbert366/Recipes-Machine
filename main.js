const dbRecipes = [
  {
    receita: 'Bolo de cenoura',
    ingredients: [
      'cenoura',
      'açúcar',
      'ovo',
      'farinha de trigo',
      'leite',
      'chocolate',
    ],
    tempo: '30 minutos',
    rendimento: '15 porções',
  },
  {
    receita: 'Bolo de chocolate',
    ingredients: ['ovo', 'açúcar', 'farinha de trigo', 'leite', 'chocolate'],
    tempo: '30 minutos',
    rendimento: '15 porções',
  },
  {
    receita: 'Estrogonofe de frango',
    ingredients: [
      ' Filé de peito de frango: 500 g',
      'Cebola picada: 1 unidade',
      'Alho picado: 2 dente(s)',
      'Molho inglês: 1 colher de sopa',
      'Extrato de tomate: 1 colher de sopa',
      'Mostarda: 1 colher de sopa',
      'Creme de leite: 1 caixinha',
      'Leite: 1/4 xícara de chá',
      'Sal: a gosto',
    ],
    tempo: '15 minutos',
    rendimento: '3 porções',
  },
  {
    receita: 'Moqueca de peixe',
    ingredients: [
      'Limão: 1 unidade',
      ' Sal: 1 colher de chá',
      'Cebola grande fatiada: 1 unidade',
      'Pimentão amarelo fatiado: 1 unidade',
      'Pimentão vermelho fatiado: 1 unidade',
      'Tomates fatiados: 2 unidades',
      'Leite de coco: 200 ml',
      'Azeite de dendê: 1 colher de sopa',
      'Coentro picado: 3 colheres de sopa',
    ],
    tempo: '30 minutos',
    rendimento: '4 porções',
  },
  {
    receita: 'Escondidinho de abóbora',
    ingredients: [
      'Óleo: 2 colheres de sopa',
      'Cebola picada: 1/2 unidade',
      'Alho picado: 3 dente(s)',
      'Carne moída: 250 g',
      'Tomate picado: 1 unidade',
      'Abobora moranga: 750 g',
      'Leite: 1 xícara de café',
      'Parmesão ralado: 50 g',
      'Queijo mussarela : 6 fatias',
      'Sal: a a gosto',
    ],
    tempo: '30 minutos',
    rendimento: '6 porções',
  },
  {
    receita: 'Arroz Arroz Básico',
    ingredients: [
      '1 colher (sopa) de óleo',
      'meia cebola pequena picada',
      '1 dente de alho pequeno picado',
      '1 e meia xícara (chá) de arroz',
      '1 colher (sopa) de sal',
      '3 xícaras (chá) de água fervente',
    ],
    tempo: '30 minutos',
    rendimento: '5 porções',
  },
  {
    receita: 'Arroz com feijão na panela de pressão',
    ingredients: [
      '3 xícaras de arroz cru',
      '2 concha de feijão cozido com o caldo',
      'Alho',
      'cebola',
      'sal e óleo (a gosto)',
      '2 copos de água (250ml)',
    ],
    tempo: '23 minutos',
    rendimento: '6 porções',
  },
  {
    receita: 'Picadinho Dia a Dia',
    ingredients: [
      '2 colheres (sopa) de óleo 2 dentes de alho amassados',
      '1 quilo de coxão duro em c',
      '2 colheres (sopa) de extra',
      '3 tabletes de MAGGI® Caldo',
      '5 xícaras (chá) de água fe',
      '2 xícaras (chá) de abobrinha',
      '2 xícaras (chá) de abóbora japonesa em cubos',
    ],
    tempo: '40 minutos',
    rendimento: '8 porções',
  },
  {
    receita: 'Filé de Frango Grelhado',
    ingredients: [
      '500 g de filé de frango',
      '2 colheres (sopa) de suco de limão',
      '1 colher (sopa) de MAGGI® Fondor',
    ],
    tempo: '40 minutos',
    rendimento: '4 porções',
  },
  {
    receita: 'Salada Refrescante e Colorida',
    ingredients: [
      '4 folhas de alface picadas',
      '1 cenoura ralada',
      '1 pepino em palitos',
      '1 beterraba ralada',
      'meia xícara (chá) de tomates-cereja cortados ao meio',
      '6 ovos de codorna cozidos',
    ],
    tempo: '10 minutos',
    rendimento: '4 porções',
  },
]

const ingredientsUser = [
  'ovo',
  'cenoura',
  'açúcar',
  'farinha de trigo',
  'leite',
]

const recipesThatUserCanMake = dbRecipes.filter(recipe => {
  return ingredientsUser.every(ingredient => {
    return recipe.ingredients.includes(ingredient)
  })
})
console.log(recipesThatUserCanMake)
