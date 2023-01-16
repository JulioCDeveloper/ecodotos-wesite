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

                        <div className="justify-center  flex flex-wrap">
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

                                        <Tab className={classes.textTabs} label={<span style={{ color: '#2BA3B4' }}>Compre resíduos</span>} {...a11yProps(0)} />

                                        <Tab label={<span style={{ color: '#2BA3B4' }}>Venda resíduos</span>}{...a11yProps(1)} />

                                    </Tabs>
                                </div>
                            </Box>


                            <TabPanel value={value} index={0}>
                                <div class="flex flex-wrap -m-4 text-center">
                                    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                                        <div class="px-4 py-6 rounded-lg">
                                            <div className="flex flex-wrap justify-center p-5">
                                                <div className="rounded-full p-2 w-16 h-16 justify-center border-4 border-teal-400">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-teal-400 w-10 h-10 mb-3 inline-block">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <h2 class="title-font font-medium text-lg  text-gray-900">Procure seus produtos favoritos</h2>
                                            <p class="leading-relaxed text-xs">Navegue por milhares de ofertas publicadas no mercado e encontre o que você procura.</p>
                                        </div>
                                    </div>

                                    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                                        <div class="px-4 py-6 rounded-lg">
                                            <div className="flex flex-wrap justify-center p-5">
                                                <div className="rounded-full p-2 w-16 h-16 justify-center border-4 border-teal-400">

                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-teal-400 w-10 h-10 mb-3 inline-block">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                                                    </svg>


                                                </div>
                                            </div>
                                            <h2 class="title-font font-medium text-lg  text-gray-900">
                                                Negocie o melhor produto
                                            </h2>
                                            <p class="leading-relaxed text-xs">Negocie com vários vendedores em tempo real e faça o melhor negócio direto do seu celular.</p>
                                        </div>
                                    </div>

                                    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                                        <div class=" px-4 py-6 rounded-lg">
                                            <div className="flex flex-wrap justify-center p-5">
                                                <div className="rounded-full p-2 w-16 h-16 justify-center border-4 border-teal-400">

                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-teal-400 w-10 h-10 mb-3 inline-block">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                                    </svg>

                                                </div>
                                            </div>
                                            <h2 class="title-font font-medium text-lg text-gray-900">Compre direto dos fornecedores
                                            </h2>
                                            <p class="leading-relaxed text-xs">Compre diretamente de fornecedores de material de qualidade em seu país ou internacionalmente.</p>
                                        </div>
                                    </div>

                                    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                                        <div class=" px-4 py-6 rounded-lg">
                                            <div className="flex flex-wrap justify-center p-5">
                                                <div className="rounded-full p-2 w-16 h-16  justify-center border-4 border-teal-400">

                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-teal-400 w-10 h-10 mb-3 inline-block">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
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
                                                <div className="rounded-full p-2 w-16 h-16 justify-center border-4 border-teal-400">
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
                                                <div className="rounded-full p-2 w-16 h-16 justify-center border-4 border-teal-400">
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
                                                <div className="rounded-full p-2 w-16 h-16 justify-center border-4 border-teal-400">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-teal-400 w-10 h-10 mb-3 inline-block">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <h2 class="title-font font-medium text-lg text-gray-900">Venda diretamente ao cliente</h2>
                                            <p class="leading-relaxed text-xs">Venda produtos diretamente para clientes em seu país</p>
                                        </div>
                                    </div>

                                    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                                        <div class=" px-4 py-6 rounded-lg">
                                            <div className="flex flex-wrap justify-center p-5">
                                                <div className="rounded-full p-2 w-16 h-16  justify-center border-4 border-teal-400">
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