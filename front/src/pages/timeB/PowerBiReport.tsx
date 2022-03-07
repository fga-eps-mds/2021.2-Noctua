import React from "react";
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import './css/PowerBI.css';
import { Center } from "@chakra-ui/react";
const PowerBiReport = () => {
    return (
    <Center marginTop='3rem'>
        <PowerBIEmbed
        embedConfig={{
            type: 'report',   // Supported types: report, dashboard, tile, visual and qna
            id: '405bd8fe-4db8-4e21-9c4b-7114936799b1',
            embedUrl: "https://app.powerbi.com/reportEmbed?reportId=405bd8fe-4db8-4e21-9c4b-7114936799b1&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUJSQVpJTC1TT1VUSC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOnRydWUsImFuZ3VsYXJPbmx5UmVwb3J0RW1iZWQiOnRydWUsImNlcnRpZmllZFRlbGVtZXRyeUVtYmVkIjp0cnVlLCJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZSwic2tpcFpvbmVQYXRjaCI6dHJ1ZX19&language=pt&formatLocale=pt-BR",
            accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCIsImtpZCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZWMzNTliYTEtNjMwYi00ZDJiLWI4MzMtYzhlNmQ0OGY4MDU5LyIsImlhdCI6MTY0NjYyNTI3MSwibmJmIjoxNjQ2NjI1MjcxLCJleHAiOjE2NDY2MzA1MDAsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUErcFNvdUlzNE1uN3RGK3ZqalVGVm1XRVFjQ2NzRmtVWHVjbWtuR1d2Wm9OMSs1RkJiT0tjZDBwK1BmdXRzU3pLIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMiIsImZhbWlseV9uYW1lIjoiU29hcmVzIEFycnVkYSIsImdpdmVuX25hbWUiOiJNYXRoZXVzIiwiaXBhZGRyIjoiMTc5LjEyNy4yNTAuOCIsIm5hbWUiOiJNYXRoZXVzIFNvYXJlcyBBcnJ1ZGEiLCJvaWQiOiIzNDg2MmJjZC02ZjgzLTRiMTQtODY5Yi1jYTM2Yjc4YzMxYWEiLCJvbnByZW1fc2lkIjoiUy0xLTUtMjEtMTY3NTc5OTcwLTE3MDI0MDAzOTgtMzUzOTY0NzM2NS01MjU2NSIsInB1aWQiOiIxMDAzMjAwMDVCNTJGNUVDIiwicmgiOiIwLkFRb0FvWnMxN0F0akswMjRNOGptMUktQVdRa0FBQUFBQUFBQXdBQUFBQUFBQUFBS0FORS4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzdWIiOiJBMFFCNjNqQ2JVY2RXdWpoM04ya2hLb1dwZWlvZmRKQjRwZGRkazItWDFrIiwidGlkIjoiZWMzNTliYTEtNjMwYi00ZDJiLWI4MzMtYzhlNmQ0OGY4MDU5IiwidW5pcXVlX25hbWUiOiIxOTAwOTM0ODBAYWx1bm8udW5iLmJyIiwidXBuIjoiMTkwMDkzNDgwQGFsdW5vLnVuYi5iciIsInV0aSI6Im9fbG4wUXp2V2tPN2xDQVdrYlRGQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.CB9HFCBORl9d_475wCre3pIbNn6_6naUUzerCdXvU_SXEBf2RwJfK2xEK_PfzvaWf_8hPukN6uDJrFiLa3-uWhaulAjIfKX7GCgJOZJ7FkhJD2-UiZAcGX6BK8e4mCIm87lHAkSuws6Q83dk50M0AExnOly5KGecD2Sz9rX18NRTsOK_0z58CMtIy1eTQq2TxZhkWMT3qvqkMS4YRxRGXs8Sw9b6wO-BhXFuRKAWYTdc3S2x8Nb2-UY94HaAucQi8gVNDbkTHKDy62iJ_EkN6JHji8u891C6qHsQi48s1ulSQsJ1tpEbiAe1B_Xuzv5VmB_5RUPp_sIRumPH7lsbGQ',
            tokenType: models.TokenType.Aad,
            settings: {
                panes: {
                    filters: {
                        expanded: false,
                        visible: false
                    }
                },
                background: models.BackgroundType.Default,
            }
        }}

        eventHandlers={
            new Map([
                ['loaded', function () { console.log('Report loaded'); }],
                ['rendered', function () { console.log('Report rendered'); }],
                ['error', function (event) { console.log('error'); }]
            ])
        }

        cssClassName={"Embed-container"}

      
    /></Center>);
}
export default PowerBiReport;