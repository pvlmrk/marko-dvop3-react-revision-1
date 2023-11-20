import Card from "./Card";
import CardDynamic from "./CardDynamic";

const App = () => {
  return (
    <div className="app">
      <Card></Card>
      <CardDynamic
        title="Karta 1"
        description="Toto je popis karty 1."
        link="#"
        linkText="Odkaz 1"
      />
      <CardDynamic
        title="Karta 2"
        description="Toto je popis karty 2."
        link="#"
        linkText="Odkaz 2"
      />
      <CardDynamic
        title="Karta 3"
        description="Toto je popis karty 3."
        link="#"
        linkText="Odkaz 3"
      />
      <CardDynamic
        title="Karta 4"
        description="Toto je popis karty 4."
        link="#"
        linkText="Odkaz 4"
      />
    </div>
  );
};

export default App;
