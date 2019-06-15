export default class PairingTool {

    constructor() {

    }

    foodParams(food) {
        var params = []
        switch(food){
            case '1': 
                params.push("@tpcategorie=\"Vin rouge\"")
                break
            case '2':
                break
            case '3':
                params.push("@tpcategorie=\"Vin blanc\"")
                break
            case '4':
                break
            case '5':
                params.push("@tpcategorie=\"Vin de dessert\"")
                break
        }
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
        if (searchString.length != 0)
          return [`${searchString}*`]
      }
      return []
    }

    getQuery(rawParams) {
        let params = ["@tpcategorie=Vin*", "@tpprixnum"]
        params = params.concat(this.searchParams(rawParams.searchString))
        params = params.concat(this.foodParams(rawParams.food))
        params = params.concat(this.priceParams(rawParams.range))
        let query = params.join(' ')
        console.log(query)
        return {
            q: query ,
            aq: "",
            numberOfResults: 24,
        }
    }
}