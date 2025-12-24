**Axios + Headers**

    => přidání headeru skze axios
    -> axios.get bere v () 2 hodnoty = (link, config)

    config => objekt obsahující konfiguraci requestu např Headery apod.
                např.: axios.get("link", {headers: {Accept: "application/json"}})