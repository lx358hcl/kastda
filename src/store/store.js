import nyttkast from "../components/nyttkast.vue";
import nyrunde from "../components/nyrunde.vue";
import { reactive } from "vue";

//Alle innstillinger og metoder som brukes
var store = reactive({
    "kast": {
        "normaltspill": {
            "0": "Kaste forehand",
            "1": "Kaste thumber",
            "2": "Kaste tomahawk",
            "3": "Kaste backhand",
            "4": "Kaste backhand hyzer",
            "5": "Kaste backhand anhyzer",
            "6": "Kaste forehand hyzer",
            "7": "Kaste forehand anhyzer",
            "8": "Kaste roller",
        },
        "ekstrautfordringer": {
            "0": "Kaste med ryggen mot kurven",
            "1": "Kaste med kun to fingre",
            "2": "Kaste med feil hånd",
            "3": "Snurre rundt tre ganger før du kaster",
            "4": "La de andre velge hvilken disk du skal bruke",
            "5": "Kaste den mest overstabile disken du har",
            "6": "Kaste den mest understabile disken du har",
            "7": "Kaste disken du har hatt lengst",
            "8": "Kaste den siste disken du kjøpte",
            "9": "Turboputte innen 20 meter fra kurv",
            "10": "Gjøre et triks med disken før du kaster",
            "11": "Kaste forehand",
            "12": "Kaste thumber",
            "13": "Kaste tomahawk",
            "14": "Kaste backhand",
            "15": "Kaste backhand hyzer",
            "16": "Kaste backhand anhyzer",
            "17": "Kaste forehand hyzer",
            "18": "Kaste forehand anhyzer",
            "19": "Kaste roller",
            "20": "Kaste 360 forehand eller backhand",
        }
    },
    "components": {
        "nyttKast": {
            "component": nyttkast,
            "state": true,
        },
        "nyRunde": {
            "component": nyrunde,
            "state": false,
        },
    },
    "innstillinger": {
        "kastType": {
            "normaltspill": true,
            "ekstrautfordringer": false,
        }
    },
    "forrigeKast": null,
    "randomKast": "Dette er en feilmelding: Vennligst kontakt Luka",
    "tidligereKast": [],
    getRandomKast() {
        return this["randomKast"];
    },
    nullstillInnstillinger() {
        var kastType = this["innstillinger"].kastType;
        Object.keys(kastType).forEach(e => kastType[e] = false);
    },
    finnKastTypeSomBrukes(){
        return Object.entries(this.innstillinger.kastType).filter(e => e[1] == true)
    },
    nullstillSider() {
        var components = this["components"];
        Object.keys(components).forEach(e => components[e].state = false);
    },
    settKastTypeTrue(kast) {
        this["innstillinger"].kastType[kast] = true;
    },
    byttInnstilling(e) {
        this.nullstillInnstillinger();
        this.settKastTypeTrue(e);
        this.oppdaterLocalStorage();
    },
    byttSide(e) {
        console.log(e);
        this.nullstillSider();
        this.components[e].state = true
    },
    erAktiv(komponent){
        return this.components[komponent].state;
    },
    startNyRunde(){
        this.tidligereKast = [];
        this.randomKast = "Dette er en feilmelding: Vennligst kontakt Luka";
        this.nullstillInnstillinger();
        this.settSomForrigeKast(null);
        this.settKastTypeTrue("normaltspill");
        this.oppdaterLocalStorage();
    },
    settSomForrigeKast(e){
        console.log(e);
        this.forrigeKast = e;
    },
    oppdaterLocalStorage(){
        localStorage.setItem("state", JSON.stringify({
            "tidligereKast": store.tidligereKast,
            "forrigeKast": this.forrigeKast,
            "innstillinger": {
                "kastType": {
                    "normaltspill": this.innstillinger.kastType.normaltspill,
                    "ekstrautfordringer": this.innstillinger.kastType.ekstrautfordringer
                },
            }
        }));
    },
});

export { store };