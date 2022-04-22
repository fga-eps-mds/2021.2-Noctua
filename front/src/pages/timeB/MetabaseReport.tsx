import React from "react";
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import './css/PowerBI.css';
import { Center } from "@chakra-ui/react";
// you will need to install via 'npm install jsonwebtoken' or in your package.json

var jwt = require("jsonwebtoken");

var METABASE_SITE_URL = "http://localhost:1515";
var METABASE_SECRET_KEY = "e008c87dbadcd77aba00960437254fc53e326931c5f510713512789a432d5958";

var payload = {
  resource: { dashboard: 1 },
  params: {},
  exp: Math.round(Date.now() / 1000) + (10 * 60) // 10 minute expiration
};
var token = jwt.sign(payload, METABASE_SECRET_KEY);

var iframeUrl = METABASE_SITE_URL + "/embed/dashboard/" + token + "#theme=night&bordered=true&titled=true";

const MetabaseReport = () => {
    return (
    <Center marginTop='3rem'>
        <iframe
        title = "Dashboard Gastos dos deputados"
    src={iframeUrl}
    width='1250rem'
    height={600}
    allowTransparency
/>
</Center>);
}
export default MetabaseReport;