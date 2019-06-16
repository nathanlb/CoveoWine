export default class PairingTool {

    constructor() {
        this.tags = {
            category: [],
            cepage: [],
            price: [],
        }
    }

    foodParams(food) {
        var params = []
        var category = []
        var cepage = []
        switch(food){
            case '1': 
                category = category.concat(['\"Vin rouge\"'])
                break
            case '2':
                category = category.concat(['\"Vin rouge\"',"\"Vin blanc\"","\"Vin rose\""])
                cepage = cepage.concat(['\"Sauvignon Blanc\"','\"Chenin Blanc\"','\"Riesling\"','\"Chardonnay\"','\"Brachetto\"','\"Schiava\"','\"Pinot Noir\"','\"Grenache\"'])
                break
            case '3':
                category = category.concat(["\"Vin blanc\"","\"Vin rose\"","\"Mousseux\""])
                cepage = cepage.concat(['\"Pinot gris\"','\"Chenin Blanc\"','\"Riesling\"','\"Chardonnay\"','\"Sauvignon Blanc\"','\"Muscadet\"','\"Chablis\"','\"Soave\"'])
                break
            case '4':
                category = category.concat(["\"Vin blanc\"","\"Vin rouge\""])
                cepage = cepage.concat(['\"Shiraz\"','\"Chenin Blanc\"','\"Riesling\"','\"Chardonnay\"','\"Pinot noir\"','\"Merlot\"'])
                break
            case '5':
                category = category.concat(['\"Vin de dessert\"'])
                break
        }
        if (category.length > 0)
            params.push(`@tpcategorie==(${category.join(',')})`)
        if (cepage.length > 0)
            params.push(`@tpcepagenomsplitgroup==(${cepage.join(',')})`)

        return params
    }

    priceParams(range) {
        var params = []
        params.push(`@tpprixnum>=${range.min}`)
        params.push(`@tpprixnum<=${range.max}`)
        return params
    }

    searchParams(searchString) {
      if (searchString != null) {
        if (searchString.length != 0){
          const searchArray = searchString.split(' ')
          const searchParams = searchArray.map( x => `${x}*`)
          return searchParams
        }
      }
      return []
    }

    getQuery(rawParams) {
        let params = ["@tpcategorie=Vin*"]
        params = params.concat(this.searchParams(rawParams.searchString))
        params = params.concat(this.foodParams(rawParams.food))
        params = params.concat(this.priceParams(rawParams.range))
        let query = params.join(' ')
        console.log(query)
        return query
    }
}