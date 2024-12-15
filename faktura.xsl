<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html" doctype-public="XSLT-compatibility" encoding="UTF-8" />
    <xsl:template match="/">
        <html xmlns="http://www.w3.org/1999/xhtml">
        <head>
            <title>Faktura</title>
            <style>
                body {
                    margin: 0;
                    padding: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                    background-color: #f8f8f8;
                    overflow: hidden;
                }

                .invoice-container {
                    width: 100%;
                    height: 100%;
                    position: relative;
                    background: url('https://kamilpihub.github.io/KAMILinWEB/blankiet-faktury.jpg') no-repeat center center;
                    background-size: contain;
                    background-attachment: fixed;
                    background-color: white;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: center;
                    overflow: auto;
                }

                .field {
                    position: absolute;
                    font-size: 14px;
                    color: black;
                }

                #sellerName { top: 50px; left: 350px; width: 300px; }
                #sellerAddress { top: 70px; left: 350px; width: 300px; }
                #buyerName { top: 130px; left: 430px; width: 300px; }
                #buyerAddress { top: 155px; left: 350px; width: 300px; }
                .itemName { width: 300px; left: 350px; position: absolute; }
                .itemQuantity { width: 100px; left: 777px; position: absolute; }
                .itemNetto { width: 100px; left: 840px; position: absolute; }
                .itemBrutto { width: 100px; left: 940px; position: absolute; }
                #total { top: 350px; left: 740px; width: 100px; font-weight: bold; }
            </style>
        </head>
        <body>
            <div class="invoice-container">
                <!-- Dane sprzedawcy -->
                <div class="field" id="sellerName">
                    <xsl:value-of select="invoice/seller/name" />
                </div>
                <div class="field" id="sellerAddress">
                    <xsl:value-of select="invoice/seller/address" />
                </div>

                <!-- Dane kupującego -->
                <div class="field" id="buyerName">
                    <xsl:value-of select="invoice/buyer/name" />
                </div>
                <div class="field" id="buyerAddress">
                    <xsl:value-of select="invoice/buyer/address" />
                </div>

                <!-- Szczegóły pozycji na fakturze -->
                <xsl:for-each select="invoice/details/item">
                    <xsl:variable name="topPosition" select="205 + position() * 24" />
                    <div class="field itemName" style="top: {$topPosition}px;">
                        <xsl:value-of select="name" />
                    </div>
                    <div class="field itemQuantity" style="top: {$topPosition}px;">
                        <xsl:value-of select="quantity" />
                    </div>
                    <div class="field itemBrutto" style="top: {$topPosition}px;">
                        <xsl:value-of select="priceBrutto" />
                    </div>
                    <div class="field itemNetto" style="top: {$topPosition}px;">
                        <xsl:value-of select="priceNetto" />
                    </div>
                </xsl:for-each>

                <!-- Łączna kwota -->
                <div class="field" id="total">
                    <xsl:value-of select="invoice/summary/total" />
                </div>
            </div>
        </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
