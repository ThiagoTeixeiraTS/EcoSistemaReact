import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    nome: "Thiago",
  };

  modificarNome = (event) => {
    let nome = event.target.value;
    this.setState({
      nome: nome,
    });
  };

  criarComboBox = () => {
    const opcoes = ["Fulano", "Ciclano"];
    const comboBoxOpcoes = opcoes.map((opcao) => <option>{opcao}</option>);

    return <select>{comboBoxOpcoes}</select>;
  };

  componentDidMount() {
    console.log("Executou o DidMount ");
  }

  render() {
    console.log("Executou o render");
    const MetodoCriarComboBox = () => this.criarComboBox();
    return (
      <>
        <input
          type="text"
          value={this.state.nome}
          onChange={this.modificarNome}
        />
        <h1>Olá meu nome é {this.props.nome}</h1>

        <MetodoCriarComboBox />
      </>
    );
  }
}

export default App;
