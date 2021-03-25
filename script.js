const comandosArray = [
  'git add .',
  'git commit -m "mensagem"',
  'git push -u origin suaBranchLocal',
  'git branch',
  'git checkout -b branchQueVocêQuer criar',
  'git status',
  'git rebase outraBranch',
  'git reset',
  'git merge outraBranchQueVocêQuerMergear',
];

const equipeArray = [
  'Felipe G. Belarmino',
  'Paloma Santana',
  'Natasha',
  'Felipe Nunes',
  'Catia Y',
  'Niolle',
  'Cristiane',
  'Marlei',
  'Vitor Kogawa =)',
  '?',
]

const comandosHtmlUl = document.getElementById('lista-comandos');

const equipeUl = document.getElementById('lista-equipe');

for (i in comandosArray) {
  let liItem = document.createElement('li');
  liItem.innerHTML = comandosArray[i];
  comandosHtmlUl.appendChild(liItem);
}

for (i in equipeArray) {
  let liItem = document.createElement('li');
  liItem.innerHTML = equipeArray[i];
  equipeUl.appendChild(liItem);
}
