# Página de Grace Hooper con React
---

## Objetivo

Desarrollar la página web de información sobre Grace Hooper con React.

### Vista
![Con titulo](https://user-images.githubusercontent.com/32285482/36939284-45899bae-1efc-11e8-923d-41d202f8f962.png "Grace Hooper")

## Componentes 

La página de Grace Hooper se desarrollo con 4 componentes :

*   `App` 
*   `Main`
*  `Header`
*  `Aside`

![Con titulo](https://user-images.githubusercontent.com/32285482/36939371-adc99b00-1efd-11e8-9f5f-5a5e9b8f67d2.jpg "Componentes")

### Componente App 
En el componente `App` se encuentran integrados los otros 3 componentes.
Asimismo, para que se de esta composición , los 3 componentes se deben importar antes.

```javascript
import Header from './components/Header';
import Main from './components/Main';
import Aside from './components/Aside';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <Main/>
      <Aside/>
      </div>
    );
  }
}
```
### Componente Header 
Dentro de este componente solo se ha insertado la etiqueta `<header></header>` con su respectivo `<h1></h1>` para el título principal.

### Componente Main 
Este componente contiene todo el contenido principal de la página. Todos los elementos insertados estan envueltos en la etiqueta `<main></main>`.

### Componente Aside 
Este componente posee el contenido de la tabla de resumen de datos importantes de Grace Hooper.
Todos los elementos estan insertados en la etiqueta `<aside></aside>`.

## Estilos e Imágenes

Las imágenes y estilos aplicados se deben importar en cada componente para poder utilizarlos sin ninguna dificultad.

```javascript

import Grace_Hopper from './images/Grace_Hopper.jpg';
import eeuu from './images/eeuu.png'
import './css/aside.css';
import './css/main.css';
```

Desarrollado por Carla Centeno Ramos