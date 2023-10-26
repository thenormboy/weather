const today = {

    location : {
        city : null,
        region : null,
        country : null,

        get getCity() {
            return this.city
        },

        get getRegion() {
            return this.region
        },

        get getCountry() {
            return this.country
        },

        set setCity(newCity) {
            this.city = newCity
        },

        set setRegion(newRegion) {
            this.region = newRegion
        },

        set setCountry(newCountry) {
            this.country = newCountry
        }
    },

    date : null,

    get getDate() {
        return this.date
    },

    set setDate(newDate) {
        this.date = newDate
    },

    mainInfo : {
        icon : null,
        temperatureC : null,
        temperatureF : null,
        condition : null,
        highTempC : null,
        lowTempC : null,
        highTempF : null,
        lowTempF : null,
        feelsLikeC : null,
        feelsLikeF : null,

        get getIcon() {
            return this.icon
        },

        get getTemperatureC() {
            return this.temperatureC
        },

        get getTemperatureF() {
            return this.temperatureF
        },

        get getCondition() {
            return this.condition
        },

        get getHighTempC() {
            return this.highTempC
        },

        get getLowTempC() {
            return this.lowTempC
        },

        get getHighTempF() {
            return this.highTempF
        },

        get getLowTempF() {
            return this.lowTempF
        },

        get getFeelsLikeC() {
            return this.feelsLikeC
        },

        get getFeelsLikeF() {
            return this.feelsLikeF
        },

        set setIcon(newIcon) {
            this.icon = newIcon
        },

        set setTemperatureC(newTempC) {
            this.temperatureC = newTempC
        },

        set setTemperatureF(newTempF) {
            this.temperatureF = newTempF
        },

        set setCondition(newCondition) {
            this.condition = newCondition
        },

        set setHighTempC(newHighTempC) {
            this.highTempC = newHighTempC
        },

        set setLowTempC(newLowTempC) {
            this.lowTempC = newLowTempC
        },

        set setHighTempF(newHighTempF) {
            this.highTempF = newHighTempF
        },

        set setLowTempF(newLowTempF) {
            this.lowTempF = newLowTempF
        },

        set setFeelsLikeC(newFeelsLikeC) {
            this.feelsLikeC = newFeelsLikeC
        },

        set setFeelsLikeF(newFeelsLikeF) {
            this.feelsLikeF = newFeelsLikeF
        }

    },

    otherInfo : {
        windkph : null,
        windmph : null,
        precip : null,
        humidity : null,
        uvIndex : null,
        sunrise : null,
        sunset : null,

        get getWindKph() {
            return this.windkph
        },

        get getWindMph() {
            return this.windmph
        },

        get getPrecip() {
            return this.precip
        },

        get getHumidity() {
            return this.humidity
        },

        get getUvIndex() {
            return this.uvIndex
        },

        get getSunrise() {
            return this.sunrise
        },

        get getSunset() {
            return this.sunset
        },

        set setWindKph(newWindKph) {
            this.windkph = newWindKph
        },

        set setWindMph(newWindMph) {
            this.windmph = newWindMph
        },

        set setPrecip(newPrecip) {
            this.precip = newPrecip
        },

        set setHumidity(newHumidity) {
            this.humidity = newHumidity
        },

        set setUvIndex(newUvIndex) {
            this.uvIndex = newUvIndex
        },

        set setSunrise(newSunrise) {
            this.sunrise = newSunrise
        },

        set setSunset(newSunset) {
            this.sunset = newSunset
        }
    }
}

const tomorrow = {
    header : null,
    icon : null,
    highTempC : null,
    lowTempC : null,
    highTempF : null,
    lowTempF : null,
    precip : null,

    get getHeader() {
        return this.header
    },

    get getIcon() {
        return this.icon
    },

    get getHighTempC() {
        return this.highTempC
    },

    get getLowTempC() {
        return this.lowTempC
    },

    get getHighTempF() {
        return this.highTempF
    },

    get getLowTempF() {
        return this.lowTempF
    },

    get getPrecip() {
        return this.precip
    },

    set setHeader(newHeader) {
        this.header = newHeader
    },

    set setIcon(newIcon) {
        this.icon = newIcon
    },

    set setHighTempC(newHighTempC) {
        this.highTempC = newHighTempC
    },

    set setLowTempC(newLowTempC) {
        this.lowTempC = newLowTempC
    },

    set setHighTempF(newHighTempF) {
        this.highTempF = newHighTempF
    },

    set setLowTempF(newLowTempF) {
        this.lowTempF = newLowTempF
    },

    set setPrecip(newPrecip) {
        this.precip = newPrecip
    },

}

const nextday = {
    header : null,
    icon : null,
    highTempC : null,
    lowTempC : null,
    highTempF : null,
    lowTempF : null,
    precip : null,

    get getHeader() {
        return this.header
    },

    get getIcon() {
        return this.icon
    },

    get getHighTempC() {
        return this.highTempC
    },

    get getLowTempC() {
        return this.lowTempC
    },

    get getHighTempF() {
        return this.highTempF
    },

    get getLowTempF() {
        return this.lowTempF
    },

    get getPrecip() {
        return this.precip
    },

    set setHeader(newHeader) {
        this.header = newHeader
    },

    set setIcon(newIcon) {
        this.icon = newIcon
    },

    set setHighTempC(newHighTempC) {
        this.highTempC = newHighTempC
    },

    set setLowTempC(newLowTempC) {
        this.lowTempC = newLowTempC
    },

    set setHighTempF(newHighTempF) {
        this.highTempF = newHighTempF
    },

    set setLowTempF(newLowTempF) {
        this.lowTempF = newLowTempF
    },

    set setPrecip(newPrecip) {
        this.precip = newPrecip
    },

}


export { today, tomorrow, nextday }