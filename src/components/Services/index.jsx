import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles({
    textTabs: {
        color: "black"
    }
})

export default function Services() {


    const [value, setValue] = React.useState(0);
    const classes = useStyles();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <React.Fragment>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center justify-center w-full mb-20">
                        <h1 class="sm:text-lg text-lg font-medium title-font mb-4 text-teal-400">Como funcionamos ? </h1>
                        <div className="justify-center flex flex-wrap">
                            <div className="w-32 rounded h-1 bg-teal-400 "></div>
                        </div>
                    </div>

                    <div class="flex flex-wrap justify-center flex-wrap flex -m-4 text-center">
                        <Box sx={{ justifyContent: "center", width: "100%" }}>
                            <Box >
                                <div className="flex flex-wrap justify-center">
                                    <Tabs
                                        TabIndicatorProps={{ style: { background: '#2BA3B4' } }}
                                        value={value} onChange={handleChange} sx={{ justifyContent: "center", display: "flex" }} aria-label="basic tabs example">
                                        <Tab className={classes.textTabs} label={<span style={{ color: '#2BA3B4' }}>Compre resíduos</span> } {...a11yProps(0)} />
                                        <Tab label={<span style={{color: '#2BA3B4' }}>Venda resíduos</span> }{...a11yProps(1)} />

                                    </Tabs>
                                </div>
                            </Box>
                            <TabPanel value={value} index={0}>
                                <div class="flex flex-wrap -m-4 text-center">
                                    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                                        <div class="px-4 py-6 rounded-lg">
                                            <div className="flex flex-wrap justify-center p-5">
                                                <div className="rounded-full p-2 w-16 h-16 justify-center border-2 border-teal-400">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-teal-400 w-10 h-10 mb-3 inline-block">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>

                                                </div>
                                            </div>
                                            <h2 class="title-font font-medium text-lg  text-gray-900">Insira sua oferta</h2>
                                            <p class="leading-relaxed text-xs">Entre no mercado e publique os produtos que deseja vender em menos de um minuto.</p>
                                        </div>
                                    </div>

                                    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                                        <div class="px-4 py-6 rounded-lg">
                                            <div className="flex flex-wrap justify-center p-5">
                                                <div className="rounded-full p-2 w-16 h-16 justify-center border-2 border-teal-400">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-teal-400 w-10 h-10 mb-3 inline-block">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                                                    </svg>

                                                </div>
                                            </div>
                                            <h2 class="title-font font-medium text-lg  text-gray-900">
                                                Obtenha o melhor preços
                                            </h2>
                                            <p class="leading-relaxed text-xs">Negocie com compradores em tempo real e obtenha o melhor preço para seus produtos</p>
                                        </div>
                                    </div>

                                    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                                        <div class=" px-4 py-6 rounded-lg">
                                            <div className="flex flex-wrap justify-center p-5">
                                                <div className="rounded-full p-2 w-16 h-16 justify-center border-2 border-teal-400">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-teal-400 w-10 h-10 mb-3 inline-block">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <h2 class="title-font font-medium text-lg text-gray-900">Transações seguras</h2>
                                            <p class="leading-relaxed text-xs">Saque seu dinheiro, e deposite com a confiança Ecodots &copy;</p>
                                        </div>
                                    </div>

                                    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                                        <div class=" px-4 py-6 rounded-lg">
                                            <div className="flex flex-wrap justify-center p-5">
                                                <div className="rounded-full p-2 w-16 h-16  justify-center border-2 border-teal-400">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-teal-400 w-10 h-10 mb-3 inline-block">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <h2 class="title-font font-medium text-lg text-gray-900">Segurança na entrega</h2>
                                            <p class="leading-relaxed text-xs">Entrega segura com validação de código</p>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <div class="flex flex-wrap -m-4 text-center">
                                    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                                        <div class="px-4 py-6 rounded-lg">
                                            <div className="flex flex-wrap justify-center p-5">
                                                <div className="rounded-full p-2 w-16 h-16 justify-center border-2 border-teal-400">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-teal-400 w-10 h-10 mb-3 inline-block">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>

                                                </div>
                                            </div>
                                            <h2 class="title-font font-medium text-lg  text-gray-900">Insira sua ofert2a</h2>
                                            <p class="leading-relaxed text-xs">Entre no mercado e publique os produtos que deseja vender em menos de um minuto.</p>
                                        </div>
                                    </div>

                                    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                                        <div class="px-4 py-6 rounded-lg">
                                            <div className="flex flex-wrap justify-center p-5">
                                                <div className="rounded-full p-2 w-16 h-16 justify-center border-2 border-teal-400">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-teal-400 w-10 h-10 mb-3 inline-block">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                                                    </svg>

                                                </div>
                                            </div>
                                            <h2 class="title-font font-medium text-lg  text-gray-900">
                                                Obtenha o melhor preços
                                            </h2>
                                            <p class="leading-relaxed text-xs">Negocie com compradores em tempo real e obtenha o melhor preço para seus produtos</p>
                                        </div>
                                    </div>

                                    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                                        <div class=" px-4 py-6 rounded-lg">
                                            <div className="flex flex-wrap justify-center p-5">
                                                <div className="rounded-full p-2 w-16 h-16 justify-center border-2 border-teal-400">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-teal-400 w-10 h-10 mb-3 inline-block">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <h2 class="title-font font-medium text-lg text-gray-900">Transações seguras</h2>
                                            <p class="leading-relaxed text-xs">Saque seu dinheiro, e deposite com a confiança Ecodots &copy;</p>
                                        </div>
                                    </div>

                                    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                                        <div class=" px-4 py-6 rounded-lg">
                                            <div className="flex flex-wrap justify-center p-5">
                                                <div className="rounded-full p-2 w-16 h-16  justify-center border-2 border-teal-400">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-teal-400 w-10 h-10 mb-3 inline-block">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <h2 class="title-font font-medium text-lg text-gray-900">Segurança na entrega</h2>
                                            <p class="leading-relaxed text-xs">Entrega segura com validação de código</p>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>

                        </Box>

                    </div>


                </div>
            </section>
        </React.Fragment >
    );
}