# RGB LED Controller

Aplicativo desenvolvido para controlar remotamente um LED RGB, permitindo ao usuário alterar a cor do LED em tempo real através de uma interface intuitiva no celular.

## ✨ Funcionalidades

- 🎨 Controle de cor do LED RGB usando sliders (vermelho, verde e azul)
- 📡 Comunicação via Wi-Fi/Bluetooth/HTTP (dependendo da implementação)
- 💡 Visualização em tempo real da cor selecionada
- 🔄 Atualização instantânea do LED conforme o usuário interage

## 🛠️ Tecnologias Utilizadas

- React Native
- Axios
- ESP32

## 📱 Interface do App

A interface é composta por três sliders (R, G, B), onde o usuário pode ajustar os valores de cor entre 0 e 255. O app envia os dados ao microcontrolador, que ajusta o LED em tempo real.

## 📡 Como Funciona

1. O app se conecta ao ESP32 via rede local.
2. O usuário seleciona a cor desejada ajustando os sliders.
3. O app envia os valores RGB para o microcontrolador.
4. O LED RGB muda de cor com base nos valores recebidos.

