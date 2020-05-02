import React from 'react';

export const HowProtectCovid: Array<{ icon: string; content: React.ReactNode; }> = [
  {
    icon: require('../../assets/images/clean-hands.png'),
    content: (
      <p>
        Antes de colocar uma máscara, <strong>limpe as mãos</strong> com álcool gel ou lave com água e sabão.
      </p>
    ),
  },
  {
    icon: require('../../assets/images/cover-mouth-nose.png'),
    content: (
      <p>
        <strong>Cubra a boca e o nariz</strong> com a máscara e verifique se não há espaços entre o rosto e a máscara.
      </p>
    )
  },
  {
    icon: require('../../assets/images/avoid-touching-mask.png'),
    content: (
      <p>
        <strong>Evite tocar a máscara</strong> enquanto a estiver usando; Se o fizer, limpe as mãos com álcool gel ou lave com água e sabão.
      </p>
    )
  },
  {
    icon: require('../../assets/images/replace-mask.png'),
    content: (
      <p>
        Para remover a máscara: <strong>remova-a por trás (não toque na frente da máscara)</strong>; descartar imediatamente em uma lixeira fechada; limpe as mãos com álcool gel ou água e sabão.
      </p>
    )
  },
];