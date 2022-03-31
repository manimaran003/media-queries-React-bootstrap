import React from 'react'
import { makeStyles } from '@mui/styles'
import { Box, Grid, Avatar, IconButton } from '@mui/material'
import { Typography } from 'antd'
import { useNavigate} from 'react-router-dom'

const useStyles = makeStyles({
    root: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexGrow: 1,
    },
    img: {
        width: "50px",
        height: "50px"
    },
    text:{
        textDecoration:"underline",
        cursor:"pointer"
    }
})
const ApiHeader = () => {
    const classes = useStyles()
    let navigate=useNavigate()
    return (
        <>
            <Box className={classes.root}>
                <Box sx={{ flexGrow: 0.1 }}>
                    <img className={classes.img} src="https://uxdt.nic.in/wp-content/uploads/2020/06/IRCTC-Preview.png?x38465" />
                </Box>
                <Box sx={{ flexGrow: 5, justifyContent: "center" }}>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Typography>Railway Booking System </Typography>
                    </Box>
                </Box>
                <Box sx={{ flexGrow: 0.1 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between",alignItems:"center" }}>
                    <Box>
                        <Typography className={classes.text} onClick={()=>navigate("/Homepage")}>HomePage</Typography>
                    </Box>
                        <IconButton ><Avatar alt="Remy Sharp" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgWFhUYGRYYGhocGBwcGRwaHBwZHhoeGh0eGRgdIS4lHB4rHxkYJzgmKy8xNTc1GiQ7QDs0Py40NTQBDAwMEA8QHxISH0ArIys2NDQ0NDQ6NDY2MTQ2NDQ3NDQ0NzU0NDQ0NDQ0NDQ0NDQ0PzQ0NDQ0PTQxNDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAgEEBQYHAwj/xABCEAACAQIDBQUEBwYEBwEAAAABAgADEQQhMQUGEkFRByJhcYETMpGxFFJygqHB8CNCkqLR4SQzYrMVNERjc7LCQ//EABkBAQADAQEAAAAAAAAAAAAAAAABAgQDBf/EACcRAQEBAAIBAwMEAwEAAAAAAAABAgMRMQQSISJBURMUMmFxgbEz/9oADAMBAAIRAxEAPwDs0REBIqbyLNJLAlERAREQERIkwJRIW8ZIGBWIiAiIgIiICRVri8izSS6QJREQEREBESJMCUSAkgYFYiICebNJkSKrAKsnEQEREBERASAk5QiBGSAgCVgIiQZgBckAdTlAnEtV2hSJsKqE9ONb/C8h/wARo8Tr7VOKmLuvELqv1mGoHjpAvZ5k3kRUBuAQbGxz0Otj0yI+Ik1WBUCSiICIiAiIgJBZOUIgRkgIAlYCIiAiIgIiICIiAiIgIiYXePeKjgqRq1i1tAqi7MeQFyBfXUjQ9IGamp7y7+YTBEo7M9T6iAFh9riIAHrOSb17/YnFVD7KpVoUcwqq/CxH+spb4XPPM8tO/XrA6Xtntbr1MsPRWmoOZdy5I8kClT5MdJp2M3sxtW/HialjyDWt9lveHxmGBlSOY/X9oCsxc3clz1Ylj8TnIrTGthYeHPwkgOZ0/WkoTAvsHtjEUW4qVeohso7rsBZTdRa9iAScj1PUzo+6vau/EqY4KVIsKqLwkNyLre1jncra2WVrmcpiB9YYTErVRKiEMjqGRhoVYXB+BlxOWdi223qJVwztdaIp+yB14WaoWHiBYW6Cw5TqcBERAREQEREBERAREQEREBERAREQEREDyrVFVWZiAqglidAALkn0nzLvVt98biHrEsELH2aMxPAmgyJspIzNuc732g1CuzcWRqaLr6MOE/gTPmuAiZ/YW6OJxS8SqqUzo7kqG+wACW87W8ZmcR2a4kC6VaTnoeNPgbGUvJmXq1ecerO5GjyS9f15TLY/dnFUb+0w78I/eQcan1S9vW0w9RrGzd0jkciPQy0svhW5s8ptnn+HT+0hKK4vkQTytn+EyuC2Bia3+Xh6h8SpRf43sv4xbJ5JLfDFxN1wvZtiWF3qUk8Ls59bAD8TLHbW4+Jw6l7LVQZkpcso6shF7eV5Wcmbeu1rxak76bD2JYIti61XPhp0uHw4nYW9QqN8Z3CfLNLbldEFOjVqUaYPFam7IWYixZ3Qgs1gNcgAAAJ2fsn3irYvD1FrsXqUXA4za7K44hxW5ghhfpbmDLqN/iIgIiICIiAiIgIiICIkWMCUSFvOSBgViIgIiIGudoFPi2bix/2HP8I4vynAd19ljE4qnSb3SSz/AGFBYj1sF+9Po7eGh7TC4in9ejVX+KmR+c4D2bP/AI6n/qSoP5C35Sm7Zm2L4kupK7IiBQFUAAAAACwAGQAHISoMqBKTzq9KEMAdRfziISKoGgA8ovEQERKgQlxnf/ZC4fFHgFkqrxqBorEkMAOlxf71ptvYW37TFi5vw0Tbl71S5t10+MxPanUtiKSMuXsib2zF3YZH7oym0diOC4aWJqFR3qiIrfWCrxEA9O+PUmejx23M7eXyyTd6dSiIl1CIiAiJSAlAbyJa8mBArERASIkpQiBGSAgCVgIiICIiB413VVJYgLoSxAGeVrnre04b2YbJ4a9Z3GdEGlfIjiLWa3QgKbjownWd5qxARRqSTpfMDpzyLTXt38H7NHNu89Wq56kFyqX+4qzhzcnUuWjg4+7NMpEttoY6nQRqlVwiLqT+AAGZJ6DOaPjO0jifhw2HLgc2JBPkigkDzPpMsxrXiNet5z5roMTneD7TLMVr4cqBa5RrsvXiVgPPX0nQ6bhlDKbhgCD1BFwZGsaz5Tnc14qsRNR3n34TCu1FaZqVFALXYKiki4BOZJsQbW5jORnN1eonWs5ndbdJK1jf9aTmg7SKy2Z8IoQ2z4nW48GK2m4bA3mw+MBFJiHAuyMLMB1yNmF+YJ18Za8es/Nik5c6vUrCdp+DQpSxLrf2ZZOHrx2IJPmtvvTbOyqmF2dTN14mZ2YKRldzwgjkeAJrnnLLerB+2wddLXPs2YfaQca/zKJk9zF9mFo8kpIo8lAVfP8Aez5zTw8nxMs/NxfN026IiaGUiIgUkCbyTC8AQAElEQEREBERAREQEREBERA1zeRbsg/0tkbG9yFOuWjHWWWHWyKL3y5aZ55GZLeNDemwF7Fh8jYeJsZgtk4njFQfUqMmYIOSq2hzHvX9Zh5pfdW/gs9sWu2thLiGVqt3SmLpTN+Djzu7qM3NrALcDX62WK3hrthPZGnw8NQNmOMr3RZQfYOig6Kcjw5ZkXttxEszs5GN6ipU6F6aFr9S2hPkBI4+SZ/lO4nl47qfTer+VntDdtKwX6RTDhlBBJbiW4BI478asCc1LEG2WhEvsKiU1p00vwBOFCSWyUCwucz3b/wz2NEBSqWTxVRl5DS/neeNSmFNFV0V7DnkKTgZnWV1r3ePH4Xxj2z58/l71KluEc2aw+BY/gpPpMO27eHas1ZaStWdrlmPHZhl3Q11W1vetkFyztMniR36X2z/ALbyaUbFiD3WzKnMBuZHS/Mdc8s7xm+1Op7msY/E1Uxq4Q3IZqa/9Q1w4HEwb2oUqvEL3XMK2Wtryru4hqrVQqteme7UplbEjVX4AFqKR3TcKwGXjMtU2dTJ4hSpcfJjTVrfI9ec9qNMgWLFj5AAeAA0HxPjOuuWWfTOnHHFqW+69x6OtwR1BEru6tqo09xtLZi4a9xkc2MsdsYn2dFn6FB/E6r+cym76Xqs1sggAyscyLXHK/CTbyleGfVFuaz2VssRE3vPIiICIiAiIgIiICIiAiIgIiICIiBYbUocVM2FypDAa6a2HM2vbxnPt28V/isfSIIZayPYixs9NRodPcHxE6dOLb24z6Dts1jcU6yIXyy4GUU2PjwtTDehE5cvH3LZ5duLk9tkvjtv8QDE896JDIDYnkbj4EfImeeKqcCO9rlVJA6kC+cnTUgAEknmTzPMyQdASCdVNx52K/ImVieOGqE8Sk3KMVv1Fgw9bMB5gwPaIiQNa35xfBRpJq1XEUEUDU2dX/8AgD1E37Y9GyliCC50IINhkLg5jO/oROT7TxX0rbOEw65rQqKW1txqfavp0CKt+RBnaRN/FxyZlvl5/NyW6snhKIidnAiIgIiICIiAiIgIiICRVryJN5JRAlERAREQE5J247LJGHxIGSlqT5cm7y3PS4YfenW5h95tkjF4WrQyu6HgJ0FQd5CeoDhTbwgc17ON4BVpfRnb9pSHcvq9MaeZXIeXCes3acHL1sNVVmHC6McwAGDLkRe17jMEHxBBF5s+2d/6r0FSmvBUcd+opy4dO4NUYm976cib3GXk4bddz7tfHzyZ6v2bxtnePCUOJK1ZeIghkALtYjRlQErl1tMCm+WCVi6163GbXLJVZCALW4L8K31uoGefUHn2y938TiQWpUmZLm7sQq35njcji53teZBdysSdDSPiHYr/ABhOH8ZM4sZ+LUfq8mvmRudXfbBuO/VcDkqLWWxve7OArNoMshrryyuyN6cFVPAlccbEmzgoWY9OIAE8gB0AnOG3JxQ19kPHibh9X4eEfGWe0t18VRQu9Emna5dCrrbqeEkgeJAEXi478Sn6vJn5sdzmC3u3gXB0SwINV7rSXW7fWI+qt7n0HOaDu5v3Uw9NqdRTWAH7IlrFT9VmOZX4kaaaa3tXaVTE1DUqtxO2Q5Ko5Ko5KL/mc85XHBfd8+P+rb9RPb8ef+N67GdnGpjKmJa5FJG7x51Khtcm+Z4ePl+9O3g3E1Ls52F9EwSKwtVqftKml7t7q3sNF4RnzvNuAmtjViIgIiICIkL38oE4kLSQMCsREBPMm8mRKAQAElEQEREBERASIkpQiBxftV2StDEDEkA06t+FbZe2A71/MAN58U53hqyGqjVVvSDrxquXc4u8AB4Xn0Hv9swYnCmkcixupP7rhSVbLodfC8+dq1BkdkYWdSVYeINjK9y2xbqyTTulfC8ao1NgafCvCg4QnDqrJ3SNLW9LEc/N0C5uKi+Jc2/lciaf2bbx2/wlRupoEn1KfMr6jpJdquySfZ4kZqo9m4Oi3JZGHS5JB+7Mnss37a3Tm+j3Zn+m2qqse5xsR9VyPmwEuMFg3VuMsVGfcup4ieb2UC/xPjynOOy/ZBfENiNEogqLZcTspFj4BSSfErNh7Rd4/Yp9GptarUHfIOaUz8mbTyuekXF93tlTObvHu1OnP95motiqv0dQKfHZbe6SAOMr0UtxEcreEzXZ1sI4nFqpUlKZD1jqCBfhS9u6WYC45qG6TUVbh/t+U772b7L9hTPGP2tQI1Q2F+Kx7pI5Lp016zV3M9Rg6uu9N3USURLqkREBERASC/jJyhECMkBAErAREQEREBERAREQEREBESJNoGC3jf3F8yfwA/Ocw353aNUHEUV/aKP2ijVlAyYdWAFvEeQm/bRxPtHLDTRfIfon1lrMWt2b7jfjil45K4IM/tfM/wBf1rr74jaNZ14XrVXUaK9RnXw7rEidN2/uXRxBLqfZVDe5UXVj1ZMs/EEeN5q1bcHFX7rUm8eNhfxIK5H9eejPLnXlm1w7z4azhcdVp39nVqJfXgdkv58JF55u5JLMSxOZJJJY9STmfObRT3BxV8zSA+2x+S/q02PYu4tOmwes3tXGYW3CgPiuZb1y8JN5cT5M8W9fHTGbibtFmGJrLkM6SnmfrkdBlb48hOrbvvaoR9ZT8QQfleYuemGqlGVh+6b+Y5j4Xmb9S3ctav0pOOyN2iedKoGUMDcEXE9JteeREQEREBERAREQEREBESkBE86lQKCSQABckmwA8Tymm7Z7Q6FIlaKms45g8KfxWufQW8ZOc614im+TOJ3q9N2lJxvHb+41/dZKY5BFF7eJe5+FpgcRtfEVPfr1WvyLsR8L2naen196y69bieJ277VxKL7zKvmQPnLH/j2G4gn0iiWYhQBUUkk5AWB1vOBmS185f9t/blfX37R9GzCbc9roP8vnbX73h+E03dHfzhC0cUSRotXUjoKnM/a169Z0mlVVlDKwKkXBBBBHgRqJm5eKz4rfwc+dfVPn+mlxNnxWyUfMDhbqNPUTFV9i1F92zDwNj8D/AFmHXDqPSzz4v9MbE93wjrqjD0NviJ4kHnOfVnl1ll8EpAE9kwznRWP3T8467TbJ5eMTIUtj1W1AUeJ/IXmTw2xUXNu8fHIfD+s6Ti1fs5a58z7rLYhq3sPcvnfTx4fGbHIZAcgB6WE0Levf1UDUsKQz6NUFiq/Z+s3joPGbOLi1/GfLzufnzPqvw26ttvDI5pvXpK62urOqkXF8wT0tLuli6b+66t5MD8jPnl2JJZiSxJJJNyScySTqTITX+2n5ed+/v4fR95W8+esPtOunuVqifZdlHwBmcwO/GNT/APUOOjoDf1WzX9ZW+n19q6Z9di+Z07TE0HZHaRSYhcQhpn6y3ZfUWuv4zeMNiEqKHRgysLqykEEeBE46zc+Y1Y5c7nea94iJV0IiIFJ5VaoVSzEBQCSTkABmST0tPWaF2kbaKqmFT36mb+CA5A+ZB/h6HO2Z7r0pybmM21qe9+9b4tyiErQU91dC9v3m/JeXnNYEvMQjpbjIYH1v4E6y2qJaxGh06+Rm/EmZ1Hicm9b1bpAmIiXciIiBUzK7F3gxGFP7JyF1KN3lP3eXmLGYmBIslnVWzq5veb8up7I7R6T2WvTam3VbunwHeHlY+c2zAbYoVv8ALrI56BgT6rqPhOG0qYVeIkE9R+V9OZvobWlrWfiYn9f28uUz64JfHw249ZvM+r5fRkWnz7h9rYhMkr1VA5K7AfAG0vk3txo0xL+vCfmJS+n19q7T12PvK7paJwxt78af+pf0Cj5LLOvtrEv72IrEdDUa3wvaJ6fX5L67H2ldzxu0qNEXq1UT7TAE+QJuZqu0+0XDpcUVes3W3AvqzC/wE5MZcUKZuAPePwUa38/l5y84JPPy469bvXxmdMrt3erE4q6u/Ch/cXur97m3qbeAmDBl1iFdSA9mB/H11vLd1t5EXHlp+RnfMknUZN61q96vdQiIlnMiIgVvM1uzvHUwb3UlqTHvpfIjqv1W8fjMJPSml887DU20ldSWdVfGtZvefL6AwONWtTWpTYFXF1P9ehByI6y7nNezva4R/oxbuuC1P7Q94DzAJ81y1nS55+8+3XT3OHk9+JSIlZV0UM4TvFtM18S9dTcBiF+wpKqfIrb1JnYN58Z7HCV3vYimwU/6iOFf5iJwZTbMTT6fPmvO9dvxn/bJnEAqHcA68CjroSbzHVHLG5/sPACUZidf15CRmqTp5+r2RESVSIiAEuaB4DncHI38NbaZX6iW4M9KtYta/L4nzMirSyKVHvkNL38z1P8ATlPOIkot7IiIQREQEuFqFSHXkAD52tn5y3klYjT9DxEiplZGpiBwh3ALEd1eQHUzHM5JuZR2JNzKRJ0m3siIkqkRECdOmWNhPYOFFiudrdAcxe465Z21Et1a0q7km51kdLS9PbCYtqdRKqnvIysPum9vLK3lPoHDV1qIrqbq6hlPUEXH4GfO07R2eYz2mBpg6oWQ/dNx/KVmf1GfiVu9Dv5uW0RKxMj02r9on/IVfOn/ALqTi8RNnp/4vK9b/Of4IiJoYyIiQEREBERAREQEREBERAREQEREBERAREQEREBOr9lH/K1P/O3/AKU4icfUfxavR/8Aq3mIiYnrv//Z" /></IconButton>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default ApiHeader