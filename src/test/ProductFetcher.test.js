import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import ProductFetcher from '../js/components/products/ProductFetcher'
import ProductCard from '../js/components/products/ProductCard'

Enzyme.configure({ adapter: new Adapter() })

describe("ProductGrid", () => {
  test("renders", () => {
    const mockState = {
      food: null,
      sugar: 50,
      acidity: 50,
      priceRange: {min: 10, max: 100},
      searchString: null,
      fetchCount: 0,
      showModal: true,
      ordering: 2,
    }
    const wrapper = shallow(<ProductFetcher appState={mockState}/>)

    expect(wrapper.exists()).toBe(true)
  })

  test("renders product card", () => {
    const mockState = {
      food: null,
      sugar: 50,
      acidity: 50,
      priceRange: {min: 10, max: 100},
      searchString: null,
      fetchCount: 0,
      showModal: true,
      ordering: 2,
    }
    const mockItem = {
      "title": "Vignoble Des 2 Lunes Sélénite Pinot Gris Alsace 2016",
      "uri": "https://www.saq.com/page/fr/saqcom/vin-blanc/vignoble-des-2-lunes-selenite-pinot-gris-alsace-2016/14044320",
      "printableUri": "http://www.saq.com/items/Vignoble Des 2 Lunes Sélénite Pinot Gris Alsace 2016",
      "clickUri": "https://www.saq.com/page/fr/saqcom/vin-blanc/vignoble-des-2-lunes-selenite-pinot-gris-alsace-2016/14044320",
      "uniqueId": "-1$0$30292.23337$https://www.saq.com/page/fr/saqcom/vin-blanc/vignoble-des-2-lunes-selenite-pinot-gris-alsace-2016/14044320",
      "excerpt": "Retour au sous-menu de la section Informations supplémentaires sur le produit ... Les informations ci-dessus correspondent aux plus récentes données disponibles. ... Elles peuvent donc varier en fo...",
      "firstSentences": null,
      "summary": null,
      "flags": "HasHtmlVersion",
      "hasHtmlVersion": true,
      "hasMobileHtmlVersion": false,
      "score": 1080,
      "percentScore": 73.9483,
      "rankingInfo": null,
      "rating": 3,
      "isTopResult": false,
      "isRecommendation": false,
      "titleHighlights": [],
      "firstSentencesHighlights": [],
      "excerptHighlights": [],
      "printableUriHighlights": [],
      "summaryHighlights": [],
      "parentResult": null,
      "childResults": [],
      "totalNumberOfChildResults": 0,
      "absentTerms": [],
      "raw": {
          "systitle": "Vignoble Des 2 Lunes Sélénite Pinot Gris Alsace 2016",
          "systopparent": "212423435639996663",
          "sysurihash": "q9TIjpsVPTcC/pYp",
          "urihash": "q9TIjpsVPTcC/pYp",
          "tpcepagenomsplitgroup": "Pinot gris",
          "tpbouchon": "Liège",
          "tpcodecup": "03760112660659",
          "sysuri": "http://www.saq.com/items/Vignoble Des 2 Lunes Sélénite Pinot Gris Alsace 2016",
          "sysprintableuri": "http://www.saq.com/items/Vignoble Des 2 Lunes Sélénite Pinot Gris Alsace 2016",
          "sysfolders": "00001https://http:/0cc8ba12\n00002https://http:/www.saq.com/5a2fe8a7\n00003https://http:/www.saq.com/items/cef30134",
          "tpproducteur": "Vignoble des 2 lunes",
          "tpcategorieraw": "Vin blanc, 750 ml",
          "tpcategorie": "Vin blanc",
          "tpquantitelimite": "true",
          "sysconcepts": "points SAQ ; offerts aux membres ; habillage des bouteilles ; affichés ; mention expresse ; prix réduits ; transaction ; favoris ; accordé ; bénéfice ; achat ; client ; stock ; connecté ; inscrit ; sous-menu",
          "sysindexeddate": 1560274330000,
          "tpcepagesplitgroup": "Pinot gris 100 %",
          "syslanguage": "French",
          "tpprixbande": "20$ - 30$",
          "tpcoveoconnectorhasbinarydata": "false",
          "tpregion": "Alsace",
          "tppays": "France",
          "tpdisponibilite": "Bientôt disponible",
          "tpcouleur": "Blanc",
          "syssite": "www.saq.com",
          "tppagetitle": "Vignoble Des 2 Lunes Sélénite Pinot Gris Alsace 2016",
          "tpthumbnailuri": "http://s7d9.scene7.com/is/image/SAQ/14044320_is",
          "tpprixnum": 24.95,
          "sysdocumenttype": "WebPage",
          "tpprixnormal": "24,95 $",
          "syssource": "SAQ",
          "syssize": 138202,
          "sysdate": -17955907200000,
          "tpmillesime": "2016",
          "tpnomdebouteille": "Vignoble Des 2 Lunes Sélénite Pinot Gris Alsace 2016",
          "tpformat": "750 ml",
          "systopparentid": 212423435639996663,
          "tpcodesaq": "14044320",
          "syssourcetype": "WebScraper",
          "sysclickableuri": "https://www.saq.com/page/fr/saqcom/vin-blanc/vignoble-des-2-lunes-selenite-pinot-gris-alsace-2016/14044320",
          "sysfiletype": "webscraperwebpage",
          "tpcontenant": "Bouteille PET-4 (code recyclage 1)",
          "sysrowid": 2512475,
          "syscollection": "Default"
      }
    }
    const wrapper = mount(<ProductFetcher appState={mockState}/>)
    wrapper.setState({items: [mockItem], isLoaded: true})
    expect(wrapper.find(ProductCard)).toHaveLength(1)
  })
})