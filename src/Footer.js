import { Fragment } from "react";

const Footer = () => {
    return (
        <Fragment>
            <div className="bg-light w-100  ">
                <div className="container ">
                    <footer className="py-1">


                        <div className="d-flex justify-content-between py-3 my-4 border-top">
                            <p>&copy; 2021 <span className="title my-color"> Zeko Blog </span>, Inc. All rights reserved.</p>
                            <ul className="list-unstyled d-flex">
                                <li className="ms-3"><a href="/" className="link-dark" >
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAD/0lEQVRoge2YW2gcZRTHf+f7dtMmu0k0tRbjJYjQVmwpKOhTiyl9sQ+lGpwN2GItVF/0pUKxoBBslaA+FXywVvKgNdnxglKkPhRBQZRCpbYQb0HQYlOkNZfdNSSZmeODVJN2d2674IPze5z5n3P+Z+bMzPcNZGRkZGRkZCD/SdUP5vqMFzxk0LWKrFC4ZAg+96T4JY74dWNUBRFtlDK6kRFdyR7mw5LEZrTWa42+BpQAc50Z5ScVedYvFU78c/D49I0ml39ahIu+U3irUerIRoxb3W+Um71S8bmU9gFoc6sbfeUkcGuEVEX15cDwmyDbUbYCU74s3IPTM9MoKLKRXLn6vcI6FXk+cAovJfT/N25ltVU5A9yeInpeRLd7TudnYeN13e1dbkDbFdYCiOphW64dYUjDY+pglRdJ18RlhL0gbbZcOZpzq5sbCcNNmdnbWHbX9Bl7d+0U7p9R4/Ev71zpAnkitn457SjHVTmpmAteqfOLhlZD08zr5TpH+60G31q39iSu2ignNreyH1gRabk+BQBRhgOn43CYMLyRx26YAn6vc2YVqm8YrZ2xY5VHwxpSCfpiGG6Ej8o+b7B4MOqtGTnvAm+HnNuEiGu1NpErVw7lx6qb6oiCWJbrM+0PFo7FEUZ/R9y5O6z654DumMUvgZ4W5awa86uo3qVwMGbstUz6pWJvHGGsL7t1KyVURuPqW4XAj16puC6ONnS08m7tPluufExAoCIvAIstcRgTFS7E1ebCTi5aLlpPdiDsEG1+hZIY1Ym40vCHfaAwKTDetKHUmNOxlVGCQPX15sykxxev4QfwWqIbWVM8CsS+Mq1CYBynu0WjBdAvnp+TnQI/NOUsIYFIOYk+3gJwoDDpycIDwAhQf+PTWhYCy5tJAhKsZNt7jHAE2KPCuYTGkqG8y0BhMklI6Ot3KflA1wTCVwAt2CuGMe/n7VDSoNh3ZHGw42tE3ktaICmCvspA+y9J4xJtknzm9ymcT1okLgrnPSkeShObbLfn9MwEbYtbQD9KUyyC2cAGDo4spAlOvQjMjVYeVJG9wBaEXiCfNhewiMjDvlP4JG2CplezudHZzRhz7OrePgU+sNsvFUeb8ZG6kbaxygYfOYCwq4k8MyIMek7x07Q+rpLMwPuz640nW0VkJ7AtcfwSFL4JVHcx2Pld2hxLaWzEnbvTqncAzAZBVyvcAnS1oGRVheFgquMVnpKW7W/Cr6ir1lLbrcp+gY1N1poWGPHyOswjnfV+aDRF7NHIj9XuVdHHgW0K64n36r6Ccgo44ZvChzgyl9ZoFOlm3P2jO0fb/RpInxq9ySirAItqJTAyI8iEjzfOeNfPDEkzf1EyMjIyMjIy/pf8BXbOVL1gWCUOAAAAAElFTkSuQmCC" alt="twitter" width="24" height="24" />
                                </a></li>
                                <li className="ms-3"><a href="/" className="link-dark" > <img src="https://img.icons8.com/color/48/000000/instagram-new--v1.png" width="24" height="24" alt="insta" /></a></li>
                                <li className="ms-3"><a href="/" className="link-dark" > <img src="https://img.icons8.com/color/48/000000/facebook.png" width="24" height="24" alt="face" /></a></li>
                            </ul>
                        </div>
                    </footer>
                </div>
            </div>

        </Fragment>
    );
}

export default Footer;