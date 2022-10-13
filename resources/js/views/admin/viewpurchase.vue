<template>
  <div class="row">
    <div class="col-1" v-if="sidebarflag" style="font-size: 12px;">
      <div v-for="purchase in purchases" :key="purchase.id"  v-bind:class = "(purchase.invoiceno==formdata.invoiceno)?'bold_font':''" style="color:#000">
      
      <div @click="sideClick(purchase.id)"><b>{{purchase.invoiceno}}</b></div></div>
    </div>
    <!-- Page Heading -->
    <div class="col-11">

      <div class="d-sm-flex align-items-center justify-content-between mb-4" style="margin-right:120px">
        <div class="d-sm-flex align-items-center justify-content-between">
          <button @click="sidebarToggle" class="btn-head"><i class="fas fa-arrow-left"></i></button>
          <h1 class="h3 mb-0 text-gray-800"  style="margin-left:20px; margin-right: 20px;">{{formdata.invoiceno}}</h1>
          <button @click="sidebarToggle" class="btn-head"><i class="fas fa-arrow-right"></i></button>
        </div>
        <div class="d-sm-flex align-items-center justify-content-between">
            <VueHtml2pdf
         :show-layout="false"
         :float-layout="true"
         :enable-download="true"
         :preview-modal="false"
         :paginate-elements-by-height="1400"
         filename="Invoice"
         :pdf-quality="2"
         :manual-pagination="false"
         pdf-format="a4"
         pdf-orientation="portrait"
         pdf-content-width="800px"
         ref="html2Pdf"
  >
     <section slot="pdf-content" class="pdf_section" id="pdf_section">
          <div style=" padding: 0px 2%;">
              <div class="container" style=" padding: 30px 6%;">
              <div class="row">
                  <div class="col-8"  style="padding-top: 55px;">
              <img width="200" height="46"
                  src="data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAuAOUDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9JPGPjxdAuI7CxhF7qkuAI+SqZ6ZA5JPYf/WzZs9K8RzwiW71xLaZhnyILVGSM+mTya4Dw4/9qfFMyzDfm5mcB+SNobb+WB+VeyZr5vAVJ5jKpXqSaipOKSbW3V2s23c9CvFYdRhFatXb3Oc06/1m115dO1IW9xbyxNJDdwqULFSMhlycHmuhllSCN5JHEcaAszMcAAdSTWbN4g0qO6SGW9gS5VuInfDgkcDHXkGsr4k3bQeDLwxll83YmRxwWGfzGR+Nei6scNQqTU+flu97tWW339zn5XUnFWtczrXxjqPi7V57PQlitbKIfvL6dC5x2IXgc84B6+1aOpWniXS7V7m01RNTeNdzW09sq7x32lMHPtWb8HoVXw9dSgDe9yQW7kBVwP1P513dceBpTxeGVetN80tdG0l2slp99zatKNKo4QirLy3Oc8HeNLbxZbNhfs97EP3kBOeP7ynuP5fkTF4/1y98OaVFe2UibjKImSVNwwQTkd88Vwnhpv7N+KUsMPyRG5nh2LwNvzYH0GB+VdZ8Xv8AkVY/+vlP/QWrhp46tWyytOTtOF1dabdTaVGEMRBJaOzNjwVqd3rmgwaheSq0kxbCRptVQGK/ieP1rfrmPhp/yJWnf9tP/RjV09e/gZSnhaUpO7cU380cNZJVZJd2eeeOvGmq+GNcjtLWSF4ZIllHmxZK5ZhjIIz0rpprPxFFEzQ6lYzygfLHLaMin6kOSPyrz34u/wDI1Wn/AF6p/wChvXr9ePg3PEYvE05zdotW1ate511rU6VOUUtd9PQ5Hwz48/tTUX0rUrb7BqiErtByjkdQPQ/nn1rrq8d+KI/svxpBdW/yTmKOfd/thiAfyUV7D2rqy3E1ak62HrO7pu1+6d7X89DPEU4xUKkdFJbHhPwh+JXiXxN+1P8AtAeENT1M3Xh3wunh5tHsjBEn2X7TZyyT/Oqh33OoPzs2OgwOK9s1aym1LS7u1t7+40ueaJo0vrRY2mgYjAdBIjoWHUblYeoI4r5t+Av/ACe9+1R/1z8J/wDpvnr6dr3DiPyN+Hv7U37SvxE/bNv/AIDQ/GWHTY4Nb1fSU12Twpp8xIskuGDmEIvLi3xjfxu74wfWfHf7dXxp/Y/+OuheCPjhpHh/xH4FvvLS38aaRZTWc93b7kR7soryJ5keS0luqA5I2nayFvmf4AXkun/8Ff8AxHdQWU+pzweLfF8sdlatGstwwt9RIjQyMiBmIwC7KuSMsBk1vftx+M7v47ftmeCvB/xutrz4K/DjSk3WsmoRR3NzJbzFTJL5tsZY90rxJFuDtHDsJbJVwyA/ZOuD+OvxZ074FfB/xb491QJJbaFYSXKwO5QXE33YYdwBwZJWjjBwcFxXb2tzDe20VxbypcW8yCSOWJgyOpGQykcEEc5FfHH7avh9f2nfi/8ADn9nG31Wew0u5jn8X+LZ7HcLiCwgBitU/uESzyMMMDtZInxwAwB6h+w3+0If2lf2cPDXiq8vFu/Edup0vXWWMRkX0IUOxVQFHmI0cuEG0CUAAYwPfK/HH/glP8Tb74BftQ+Mvgx4umh046zJNpxhZg4TV7KR1EayBtoDJ9oXPO9lhA68/sdTA+RtL/bp0zw3+2145+BnjaWDTbU3FgvhnVSAiGSaxt5GtJj6tJIxRj1LbD/BX1hqdrLf6bd20F5Pp000TxpeWwQywMVIEiCRWQsp5G5WXI5BHFfiZ+1/8NLT4y/8FV9b8D393Np9pr2o6TYPdW4DPDv0y1AcA8HBwcd/Uda+y/2Y/wBqbxn8FvirD+zl+0POieI4lSHwv4xlZvK1yEsywrJKx+Z2wESQ4LMpR/3vLoDxvwR+01+0D4q/b2k+A0vxemg0GHXL2yfVE8O6abp7a2ilnIAMG0SMkWzfghS27YQNh++P2kZ/E/hH9nPxbrXhrxlqOj+IfDGh3WrR6p9ks53vXtrWRyk8ckBj2yFct5axkHG3C5U/md8Hf+U1F/8A9jHrv/pvu6/Tv9qz/k134w/9ibrH/pFNTA+Mf+CZP7R/xm/aq8Z+Lbrxx8R5pdG8MRWj/wBk2ejWEIvXnMoHmSiHcqKITwmCSw+YbSG9i/av+LHxI1j44eBvhJ8CfGR0vx1cRSaj4ijfTra7stL0zKhbm4aWJmWQscKiHJBG4DfGW/Nz9h/9pq8/ZT+C/wAcPF2l6SdW1u8m0TSdODjMFvPIuoOJp+QdiiJuB95ii8Biw/Q//gljqPhDxd8EtY8ZWOsz+IfiTr2pPN421DUAVuzeBnaFCuSPJWOQGMr8p3P91gyIgPrLwJ4c1bwvoYtNa8V6j4xv2fzG1HUra1gcfKo2IltDGoTILDcGb5jliMAFdDRTA8j1W1bwT8RYdRmUmxnnaUSkHADgh+nddx49MetesxypNEkiMHjcBlZTkEHoQajvrG21K3aC6gS4hbqkigiseHwRpltEYYPtcFuc5gjvJVQ+vG6vFw2Eq4GdRUbOEnezdmm9+juvy8zsqVY1lHn0a0OB1lTqXxZi+yj7R5dzAX8vnaF27s/TBz9K9H8VaMdf8P3lihCySICmem4EMB+YA/GrGlaHYaJCY7G1jtlPUqPmb6k8n8avU8Ll/s4VlWd3VbbS2V+i/wAxVa/M4cn2djzb4TamLF77RLofZ7oSmVI34ZjjDD6jaD+fpXoOo6hBpVlNdXMgigiUszE/p9T0xVPVvDGma3Isl5aLJMmCsqko4x0+ZSDVWTwTpdyyG6S4vRGcqt1dSSKPwLYpYahisHQ9hDllbZttaeas9vJ6+QVJ0qs+d3V9zhvhzpVxrfii51+VDHAskkg9GkfPA9QAT+ldD8Xf+RWi/wCvlP8A0Fq7KGCO2iSKGNYo0GFRBgKPYCqOseHbDXlRb+F50Q5VPNdVz64BAzyeaxWWSpYCeFpu8pXu3pq/vLeIUq6qSWiMr4af8iTp3/bT/wBGNWzb6pFeapcWsEiv9lQefjnDMTtGfYK2R7j3rNTwHokaCNLSRUHRRcygflurQ0bQLDw/FJFYW4t45G3MNxbJ6dSTXZhqeJpU6VGSjaKSbTbbsraKy6+ZlUlTlKUle78v+CeYfF3nxVaf9eqf+hvXrssqQxs8jhEUEszHAA7kmsXUfBOjatdG4vLV7iYjG555OB6D5uB7Ux/AmhyYElo8gByA9xKwz9C1cmHwmJw2Ir1oqL52ratWtf8Auvua1KtOpCEHf3fL/gnAXsD/ABG8dsbZTJpsGxHmxgCMHnn1Y7sd+fY49eqCzsbfT4RDbQR28QOQkSBR+QqeuvA4J4XnnN3nN3b/AEXkjKtW9paKVktj5i+An/J737VP/XPwn/6b56+ne1ch4a+Ffh/wn8QvGXjXToJo9e8WiyXVZXmZkkFrE0UG1TwuFcg4610mraZDrWl3Wn3D3EcFzE0Mj2lzJbTBWGCUljZXRvRlYEdQQa9Q5j8Yv2a/+UyWr/8AY5eLP/ROoV2//BbvxtoOseMPhf4ZsdSgutf0W31G41KziO57VLj7L5Ac9AWEMhC9QMHGGUn7S1f/AIJofs4a/q17qmp/D+41HUr2d7m6vLvxHqss08rsWeR3a6JZmYkkk5JJNdD8Nv2CfgF8JfEkGv8Ahr4a6dBq9uQ0Fzf3FxqBgcMrLJGLmSQI4Kgh1AYc4IycgDf2J9M8R/Dj9jf4e2/xGlk03VdL0d5rv+0m8trK0Ekj26S7seX5Vt5SlWwU2YPINfOH7Knw2+JP7Rup+Pf2jNG+I8/wuuPH2rSW9lb2ehWGpNJpVni3t8vOjGMgxujBQu8xK5ByuPt74n/CXw38YtAk0TxTHqdzpMsckM9pYazeafHcRuNrxzC2mj81CONr7hyeOTR8K/hL4Y+CvhKHwz4QtLyw0KBiYLO61O6vlgGB8sZuJJCicZ2KQoJJxkmkB+NP/BQ74Q+P/wBl/wDaR8K/Eqfxfc+KtY1fydWtvFM2m21mRqNmyL5ZghHl/Ii2zZKgPvOdxDGv2T+C/wAVdH+N/wAK/DHjrQZN+m65ZJdIhILQv92SFsEjfHIro2CfmQ8muf8AjV+zD8Of2iEtYviFo994gtLVleGx/tu/trVHUOFk8iGdI/MxK437d2GxnAAqX4Nfs2fD79n3SdR0vwBpN9oOmX7F5rL+2r65gDkYLok0zrG5AALoFY7VyeBhgfmJ8W/+U1dj/wBjDon/AKbbWv0q/ae/Zb8F/tV+AG8OeLLQJeWwkl0rWYF/0nTZ2XG9DkblOF3Rk7X2rnlVZeTk/wCCe3wIl8af8Je/hPVH8V/ahfDW28VaubwXAORL532vdvBAO7Oa+g9M0+LSdNtbKBp3htokhRrmd55WVQAC8kjM7tgcsxLE5JJJzQB+MH7LPwk8f/Bf/gqb4M0D4ktPeeI2fUrj+1ppGlXVITpl2qXSStzIH2nLH5twYNhgwH6q/tWf8mu/GH/sTdY/9Ipq6bxr8KfCvxC1rwtrGvaPDe6t4Yv/AO0tHvslZrSbGG2sCCUYYDIcq21SRlFIk+JHw00H4teFbnw34ljv59GugyXNtY6pdWH2hGRkeORreWNnjZXYGNiVPGQcDAB+Uv8AwSA+HOgfF3wp+0D4O8UWEepaFrNhpVrcwOoJwWvCrqSDtdGCurdVZVYcgV5l8OPFfjH/AIJZ/tj3vh/X5ru/8IXEkcWpiGMxRavpblvIvYkbIMkZLMACcOk0W/BY1+r3wl/Yn+DvwJ8RHXPAXhq/8NagwAla08Q6mYpwDkLLE1yUlUEk7XUj2rofjh+zH8Mf2kLbS4PiL4Vg8RDS3d7OQ3M9tLDvADASQujbTgZUnBKg4yBQB6JomtWHiXRrDV9Ku4tQ0y/t47q1u7dw0c8LqGR1YdVZSCD6GiuL+EPwG8GfAjQG0LwTZ6jpOi5zHp0+t315bwfM7HyY55nWLc0js3lhdxOWyQKKAPQe9FFGc0AFFFBoAKa7rGu5iFHqTTvWjNAGfc+IdMtM+ff28WP78oFUJfH/AIag/wBZr2np/vXCj+tb+aBQByz/ABT8Hx53+J9KX63af41PpPxF8L69qMdhp3iDTr69kzst4LlHdsAk4AOeACa6KjrQB55out6vc/H7xbok2qTyaHY+HNIv7fTjFCEjnubjUI5W3hPMPy2cWAWIG5+ORtqXGt638QPiP4k8NaTrl14Y0nw1FaLc32nw28l3dXk6NKYv38ciJFHCYWJCFnabAZBERJLrvw78Vf8ACxdd8V+G/FGk6TJquj2Gktb6jokl6Yvs015Isist1ECWN6w2leNg65Nak/gC7sfHs/irQtVh06fUbWGz1W0u7Q3EV0sPmeTKm2SMxzDzSrP8wZFVSvyqygHJHx14m03T/iT4Ya/gufFXheygvdN1e7twUu7e4jk+zy3MUexd4mt7hJFj2BljDL5e8KqwfFK88a+G7dYZrvwd4s0jXrDTtf0RfJmkt2knjRo90kbCSCVH3xzIFLqVPyMHRdm3+FF9DoXi9n1y3n8WeJ2Rr3VpbBjbxqkaxRxRW/nbliVFYhTKTvkkck7iKueOPhHp/jDxToHiaG6k0nXdLng826t0BF/aJMs32WdT95A6h0bIaN8lTteVJADCmsvEviP4z+KNLg8e67omk6fpmmX0FjYWunMgeZ7tJFLTWsjlT9mQ/eyCzc4wBk3Pxs1y38M6hpRgsT45tfFkPg0TrE/2FpplhnW7Ee/dtWznWZoi4y6NEHxiQ9TqHgPxdD8QPEHibQvE2iWKapYWdilpqGhTXRhFu1wwYul5Fu3NcvxtGAoHqaSX4JabJ4NutIa/uW1W51dPEMmubU+0NqSTpNHMQBgqvlxxBDx5KLGSRQBneI9Q8QfCG+8Oahe+KdQ8WaFqer2ui30OrW9ok1s1y/k280DW0MIP7+SFXV9w2MWUqU2yJpnxbv8ARPibqHh3xTFHBomo6ibLw9rca7YzcCJHaxuOyynJeJ+BIN0ZAeNTNuX3w+1bxXqvhy58U61Y6hY6NNHqC2Gnaa9qlxfIrKksheeXMaF/MSPGVkRGLttAqxcfDKz8QaF4s0TxT9l1zSNevnufs8cD25hj2xhBvEjN5qNGHWZChVgpUKVBoAT4baxdJ4Ivb3Xtal1BrPUdUhk1C+WGIiG3vJ4lLeUiIMRxLk7R3Jqyvxb8FP8Ad8VaQ30vI/8AGp/hx4Nk8AeEbXQ5tWuNcmhmuJn1G8RVnuGlnklLybQFL5k+YqFBOSFUEKOmoA5qP4meE5jhPEemOfa6Q/1q3F410Cf/AFes2Umf7s6n+tbVFAFa31K1u/8AU3Ecuf7jA1ZozxQTigAoHagHNGecUAHaiijrQAUUDpRQB//Z"/>
                  </div>
          <div class="col-4 s3" style="font-size:9px; text-align:left; float:left">
          <h2  style="padding-top: 45px; padding-left: 13pt;text-indent: -1pt;text-align: left; font-size:11px;font-weight: bold;">
          {{companydata.company_name}} <br>{{companydata.address1}}<br> {{companydata.address2}}</h2>
          <h2 style="padding:0;padding-left: 13pt; text-indent: 0pt; text-align: left; font-size:11px; font-weight: bold;">
          {{companydata.postcode}}
          </h2>
          <h2 style="padding-left: 13pt; text-indent: 0pt; text-align: left; font-size:11px; font-weight: bold;">
          Vat No: {{companydata.vat_number}}
          </h2>
          <h2 style="padding-left: 13pt; text-indent: 0pt; text-align: left; font-size:11px; font-weight: bold;">
          t: {{companydata.contact_mobile}}
          </h2>
          <p style="padding-left: 13pt; text-indent: 0pt; text-align: left; font-size:11px;">
          <a class="a" target="_blank">e: </a>
          <a class="a" target="_blank">{{companydata.contact_email}}</a>
          </p>
          </div>    
      </div>
          </div>
          <!-- ---------------------------------------- -->
          <div class="container">
          <div class="row">
          <div class="col-8 cont2">
            <p style="padding-left: 12pt; text-indent: 0pt; text-align: left; font-size:11px;">
            {{ formdata.firstname }} {{ formdata.lastname }}
            </p>
            <p style="padding-left: 12pt; text-indent: 0pt; text-align: left; font-size:11px;">
                {{ formdata.billing_address }}
            </p>
       </div>
          <div class="col-4">
          <p class="s1" style="padding-left: 13pt; text-indent: 0pt; margin-right: 10px; text-align: left">PURCHASE INVOICE</p>
          <div style="font-size:10px;  text-align: left;">
          <h2
          style="padding-left: 12pt; text-indent: 0pt; text-align: left; font-size:11px; font-weight: bold;">
          Invoice Date
          </h2>
          <p style="padding-left: 13pt; text-indent: 0pt; text-align: left; font-size:11px;">
          <span style="text-align: left; font-size:11px;">{{ dateFormateChanger(formdata.issue_date) }}</span></p>
          
          <h2 style="padding-left: 13pt; text-indent: 0pt; text-align: left; font-size:11px; font-weight: bold;">
          Invoice Number
          </h2>
          <p style="padding-left: 13pt;  text-indent: 0pt; text-align: left; font-size:11px; ">
              <span style="text-align: left; font-size:11px;">{{ formdata.invoiceno  }}</span>
          </p>
          <h2 style="padding-left: 13pt; text-indent: 0pt; text-align: left; font-size:11px; font-weight: bold;">Account
          </h2>
          <p style="padding-left: 13pt; text-indent: 0pt; text-align: left; font-size:11px;">
          Online OrderVAT Number140187339
          </p><br><br>
      </div>
                  </div>
              </div>
          </div><br><br>
          <!-- ----------------------------------------- -->
          <div class="container" style="font-size:10px">
          <table class="pdf_cont">
              <thead>
              <tr>
                <th style="width:350px">Description</th>
                <th style="width: 100px;">Unit Price</th>
                <th style="width: 100px;">VAT(%)</th>
                <th>Amount GBP</th>
              </tr>
              </thead>
              <tbody>
                <tr v-for="purchaseitem in formdata.purchaseitem" :key="purchaseitem.id">
                    <td>{{ purchaseitem.quantity }} x {{ purchaseitem.typename }} {{ purchaseitem.productname }} ({{ purchaseitem.weight }}g) </td>
                    <td>{{ purchaseitem.unitprice }}</td>
                    <td>{{ purchaseitem.vat }}</td>
                    <td>{{ purchaseitem.invoice_amount }}</td>
                </tr><br><br>
                <tr>
                    <td style="border:none"></td>
                    <td ></td>
                    <td>Total No VAT</td>
                    <td>{{ formdata.vattotal }}</td>
                </tr><br><br>
                <tr>
                    <td style="border:none"></td>
                    <td style="border:none"></td>
                    <td style="border:none"><strong>Amount Due GBP</strong></td>
                    <td style="border:none">{{ formdata.totalamount }}</td>
                </tr><br>
              </tbody>
          </table>
      </div>
          <!-- ------------------------ -->
          <div class="container s3">
          <p style="text-indent: 0pt;text-align: justify;font-size: 12px;">Payment Terms:</p>
          <p style=" text-indent: 0pt; text-align: justify; font-size: 12px;">
          Goods supplied by us remain the property of Gold Warehouse Limited until
          paid for in full. Interest will be charged at 4% per month. The person
          signing for the goods is personally responsible for the payment of this
          invoice and for any loss or damage however caused.
          </p><br><br>
          <p style=" text-indent: 0pt; text-align: left; font-size: 11px;">
          Signed:  <img :src="signaturedata.signature_filename" style="height:100px;"/>
          <span class="ml-3">Signed By: <span style="font-weight:600;">{{signaturedata.signed_by}}</span></span>
          </p><br>
          </div>
          <div class="container s3" style="font-size:11px">
          <p style="text-indent: 0pt; text-align: left;">
          Gold Bank is a trading name for Gold Warehouse Ltd<br> Cheques can be made
          payable to Gold Warehouse Limited.<br> Please make BACS/CHAPS/FASTER payments
          to:<br>Wise Bank<br> Sort code: <b>23-14-70</b><br>Account No: <b>24730434</b>
          </p><br>
          <p style="padding-left: 6pt; text-indent: 0pt; text-align: left">
          The Output Tax Of £ <span style="font-weight:600;">{{output_tax}}</span> On
          Supply Of This Gold Is To Be Accounted For By The Buyer To HMRC.
          </p><br><br><br><br><br><br><br><br>
          </div>
      </div> 
      <div>
          <p class="s4" style="padding-left: 49pt; text-indent: 0pt; text-align: center">
          Goldbank T/AS Gold Warehouse Limited, 215 The Broadway, Southall,
          Middlesex, UB1 1NB. Registered in England Number 08101794.<br>
          <a href="mailto:accounts@gold-bank.co.uk" class="s5" target="_blank">
              VAT Registration Number 140187339 Telephone:0203 500 1111 Email:
              accounts@gold-bank.co.uk</a></p>
      
      </div>
      </section>
     </VueHtml2pdf>
  
                  <!-- <i class="fab fa-whatsapp" title="Add Signature" style="color:#00AA5B; background-color: #EDF2F6; margin:3% 0% 3% 0%; border-radius:50%; padding: 15%; margin-left: 30%; font-size: 18px;" data-toggle="modal" data-target="#dosign"></i> -->
                  <span class="material-symbols-outlined" v-if="!sign_flag" title="Add Signature" style="color:#00AA5B; background-color: #EDF2F6; margin:3% 0% 3% 0%; border-radius:50%; padding: 11%; font-size: 23px;cursor:pointer;" data-toggle="modal" data-target="#dosign">draw</span>
                  <!-- <i class="fa fa-download" style="background-color: #EDF2F6; margin:3%; border-radius:50%; padding: 15%; margin-left: 30%;"></i> -->
                  <span style="color:#48c6f6;background-color: #EDF2F6; margin:3%; border-radius:50%; padding: 10%;font-size: 25px; margin-left: 30%;cursor: pointer;" class="material-symbols-outlined" @click="generateReport">download</span>
                  <i class="fab fa-whatsapp" style="color:#00AA5B; background-color: #EDF2F6; margin:3%; border-radius:50%; padding: 15%; margin-left: 30%; font-size: 18px;"></i>
                  <!-- <i class="fas fa-envelope" style="background-color: #EDF2F6; border-radius:50%; padding: 15%;margin-left: 30%;"></i> -->
                  <span style="color:blue;background-color: #EDF2F6; border-radius:50%; padding: 15%;margin-left: 16%;font-size: 19px;margin-right: 20%;cursor: pointer;" class="material-symbols-outlined" @click="sendemail">mail</span>
                  <!-- <i class="fas fa-print" @click="ondownload()" style="background-color: #EDF2F6; border-radius:50%; padding: 15%; margin-left: 30%;"></i> -->
                  <span class="material-symbols-outlined" style="background-color: #EDF2F6; border-radius:50%; padding: 15%; margin-left: 0%;cursor: pointer;" @click="printDiv('pdf_section')">print</span>
                  
              </div>
              <div
                  class="d-sm-flex align-items-center justify-content-between" style="margin-left: -20%;"
              >
                  <i
                      class="fas fa-link"
                      style="color:#48c6f6; background-color: #EDF2F6; border-radius:50%;padding: 22%;margin-right: 35%;font-size: 15px;"
                  ></i>
                  <!-- <i
                      class="fas fa-pencil-alt"
                      style="background-color: #EDF2F6; border-radius:50%; padding: 15%; margin-right:35%"
                  ></i> -->
                  <span style="background-color: #EDF2F6; border-radius:50%; padding: 18%; margin-right:35%;color:red;cursor: pointer;" class="material-symbols-outlined" data-toggle="modal" data-target="#deletePurchaseConfirmation">delete</span>
                  <!-- <i
                      class="fas fa-trash-alt"
                      style="background-color: #EDF2F6; border-radius:50%; padding: 15%; "
                  ></i> -->
                  <span style="background-color: #EDF2F6; border-radius:50%; padding: 18%;cursor: pointer;" @click="edit_invoice()" class="material-symbols-outlined">edit</span>
              </div>
     </div>
      <div class="">
        <div class="col-md-12 viewpurchase-div">
          <div class="row" style="padding-bottom:40px">
            
            <div class="col-md-3" style="border-right:  0.5px solid #4682B4;">
              <p style="color:#4682B4; font-size: 15px;">Supplier</p>
              <span>{{formdata.firstname}} {{formdata.lastname}}, <br>{{formdata.billing_address}}</span>
            </div>
            <div class="col-md-2" style="border-right:  1px solid #4682B4;">
              <p style="color:#4682B4; font-size: 15px;">Issue Date</p>
              <span>{{dateFormateChanger(formdata.issue_date)}}</span>
            </div>
            <div class="col-md-2" style="border-right:  1px solid #4682B4;">
              <p style="color:#4682B4;font-size: 15px;">Due Date</p>
              <span>{{dateFormateChanger(formdata.due_date)}}</span>
            </div>
            <div class="col-md-2" style="border-right:  1px solid #4682B4;">
              <p style="color:#4682B4; font-size: 15px;">Amount Due</p>
              <span><i class="fa fa-pound-sign" style="font-size:10px;margin-right:3px;"></i>{{due_payment}}</span>
            </div>
            <div class="col-md-3">
              <p style="color:#4682B4; font-size: 15px;">Status</p>
              <span>
                <button type="button" v-if="invoice_status!='Paid'" class="btn table-btn" style="margin-left: auto;width: 100px;">{{invoice_status}}</button><br>
                <span v-if="over_paid<0"> Over Amount: {{Math.abs(over_paid)}}</span>
                <button type="button" v-if="invoice_status=='Paid'" class="btn table-btn" style="margin-left: auto;width: 100px;background-color: #00AA5B !important;">{{invoice_status}} </button>
              </span>
            </div>
          </div>

          
          
        </div>
      </div>
      <div class="mt-3">
        <div class="viewpurchase-div pb-3" style="padding:0">
          <div class="">
            <div class="table-responsive table-div mb-2" style="border-radius: 8px;">
              <table class="table" id="createinvoice-datatable" width="100%" cellspacing="0" style="margin-bottom:0">
                  <thead>
                    <tr>
                      <th>Product Type</th>
                      <th>Product</th>
                      <th>Weight(gms)</th>
                      <th>Quantity</th>
                      <th>Unit Price</th>
                      <th>Vat(%)</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="purchaseitem in formdata.purchaseitem" :key="purchaseitem.id">
                        <td>{{purchaseitem.typename}}</td>
                        <td>{{purchaseitem.productname}}</td>
                        <td>{{purchaseitem.weight}}</td>
                        <td>{{purchaseitem.quantity}}</td>
                        <td>
                          <span :class="purchaseitem.price_status=='mismatch' ? 'red-color' : 'grey-color'"><i class="fa fa-pound-sign" style="font-size:10px;"></i>{{ purchaseitem.unitprice }}</span></td>
                        <td>{{purchaseitem.vat}}</td>
                        <td><i class="fa fa-pound-sign" style="font-size:10px;"></i>{{purchaseitem.invoice_amount}}</td>
                    </tr>
                  </tbody>
              </table>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div v-if="sign_flag">
                <img :src="signaturedata.signature_filename" style="height:100px;"/><br>
                <span class="ml-3">Signed By: <span style="font-weight:600;">{{signaturedata.signed_by}}</span></span>
              </div>
            </div>
            <div class="col-md-2"></div>
            <div class="col-md-2 sum-price">
              <ul style="text-align: left;">
                <li style="color:#3376C2">Sub Total</li>
                <li style="color:#3376C2">VAT Total</li>
                <li style="color:#3376C2">Total</li>
              </ul>
            </div>
            <div class="col-md-2 sum-price">
              <ul>
                <li style="font-size:13px;"><i class="fa fa-pound-sign" style="font-size:10px;margin-right:3px;"></i>{{formdata.subtotal}}</li>
                <li style="font-size:13px;"><i class="fa fa-pound-sign" style="font-size:10px;margin-right:3px;"></i>{{formdata.vattotal}}</li>
                <li style="font-size:13px;"><i class="fa fa-pound-sign" style="font-size:10px;margin-right:3px;"></i><b>{{formdata.totalamount}}</b></li>
              </ul>
            </div>
          </div>
          <!-- <div class="row">
            <div class="col-md-6">
              
            </div>
            <div class="col-md-2"></div>
            <div class="col-md-2">Sub Total</div>
            <div class="col-md-2">8000</div>
          </div>
          <div class="row">
            <div class="col-md-6">
              
            </div>
            <div class="col-md-2"></div>
            <div class="col-md-2">Sub Total</div>
            <div class="col-md-2">8000</div>
          </div> -->
        </div>
        <div>
        <div class="mt-4 btn-container">
          <div>
            <button type="button" class="cont" style="background-color: #EDF2F6;" @click="tabclick('payment')" :class="{'selectedclr':selectedtab=='payment'}">Payment({{paymentcount}})</button>
            <button type="button" class="cont" style="background-color: #EDF2F6" @click="tabclick('note')" :class="{'selectedclr':selectedtab=='note'}">Notes</button>
            <button type="button" class="cont" style="background-color: #EDF2F6;" @click="tabclick('history')" :class="{'selectedclr':selectedtab=='history'}">History</button>
          </div>
          <div>  
            <button type="button" class="btn admin-btn mobile-mb btn-nwidth" style="background-color: #7ADAAA !important;" @click="addLine"><i class="fas fa-plus" style="margin-right: 5px;"></i>Add Payment</button>
          </div>
        </div> 
      </div>
      </div>
        <div class="table-div mb-2" v-if="selectedtab=='payment'" style="background-color:white; box-shadow: 0px 5px 5px 0px rgb(0 0 0 / 10%);">
          <table class="table purchasedata" v-if="!addpayment" id="showpayment-datatable" width="100%" cellspacing="0" style="margin-bottom:0">
              <tbody>
                <tr v-for="purchasepayment in formdata.purchasepayments" :key="purchasepayment.id">
                    <td>{{dateFormateChanger(purchasepayment.payment_date)}}</td>
                    <td>{{purchasepayment.bank}}</td>
                    <td>{{purchasepayment.method}}</td>
                    <td></td>
                    <td style="color:#3376c2;"><i class="fa fa-pound-sign" style="font-size:10px;margin-right:3px;"></i> {{purchasepayment.totalamount}} </td>
                    <td>
                      
                    </td>
                    <td>
                      <span class="material-symbols-outlined" style="margin-right: 10px;color: #3376C2;" @click="editpayment(purchasepayment)">edit</span>
                      <span class="material-symbols-outlined" style="margin-right: 5px;color: red;cursor: pointer;" data-toggle="modal" data-target="#deleteConfirmation" @click="selectrecord(purchasepayment.id)">delete</span>
                    </td>
                </tr>
                
              </tbody>
          </table>
          <table v-if="addpayment" class="table" id="createpayment-datatable" width="100%" cellspacing="0" style="margin-bottom:0">
              <tbody>
                <tr v-for="(invoice_item, k) in invoice_items" :key="k">
                    <td>
                      <Datepicker class="datapicker" id="mydatepicker" v-model="invoice_item.payment_date"></Datepicker>
                    </td>
                    <td style="width:130px;" >
                      <input type="number" class="form-control form-control-user" placeholder="Amount" v-model="invoice_item.totalamount">
                    </td>
                    <td>
                      <select class="form-control form-control-user"  v-model="invoice_item.bank" @change="dropdownCash(k)">
                        <option value="ICIC Bank Accounts">ICIC Bank Accounts</option>
                        <option value="Baroda Bank">Baroda Bank</option>
                        <option value="Cash Account">Cash in hand account</option>
                      </select>
                    </td>
                    <td>
                      <select class="form-control form-control-user"  v-model="invoice_item.method">
                          <option value="Bank Transfer" v-if="!cashSelected">Bank Transfer</option>
                          <option value="Cash">Cash</option>
                          <option value="Cheque" v-if="!cashSelected">Cheque</option>
                      
                      </select>
                    </td>
                    <td>
                      <input type="text" class="form-control form-control-user" placeholder="Note" v-model="invoice_item.comment"/>
                    </td>
                    <td> <button type="button" class="btn admin-btn mobile-mb btn-nwidth" style="background-color: #EDF2F6 !important;float: right;" @click="removeLine(k)">Cancel</button></td>
                    <td> <button type="button" @click="save_payment(k)" class="btn admin-btn mobile-mb btn-nwidth" style="background-color: #7ADAAA !important;float: right;">Save</button></td>
                </tr>
              </tbody>
          </table>
        </div>

        <div class="table-div mb-2" v-if="selectedtab=='note'" style="background-color:white; box-shadow: 0px 5px 5px 0px rgb(0 0 0 / 10%);">
          <table class="table" id="addnote_table" width="100%" cellspacing="0" style="margin-bottom:0">
              <tbody>
                <tr>
                    <td>
                      <input type="text" class="form-control form-control-user" placeholder="Add note" v-model="note">
                    </td>
                    <td> 
                      <button type="button" @click="save_note()" class="btn admin-btn mobile-mb btn-nwidth" style="background-color: #7ADAAA !important;float: right;">Save</button>
                    </td>
                </tr>
              </tbody>
          </table>
        </div>
        
        <div class="table-div mb-2" v-if="selectedtab=='history'" style="background-color:white; box-shadow: 0px 5px 5px 0px rgb(0 0 0 / 10%);">
          <table class="table purchasedata" id="purchasehistory-datatable" width="100%" cellspacing="0" style="margin-bottom:0">
               <thead>
                    <tr>
                        <th style="width: 140px;">Changes</th>
                        <th style="width: 140px;">Date</th>
                        <th style="width: 140px;">User</th>
                        <th>Details</th>
                    </tr>
                </thead>
              <tbody>
                <tr v-for="purchasehistory in formdata.purchasehistory" :key="purchasehistory.id">
                    <td>{{purchasehistory.changes}}</td>
                    <td>{{ dateFormateChanger(purchasehistory.log_date) }}</td>
                    <td>{{ purchasehistory.firstname }} {{ purchasehistory.lastname }}</td>
                    <td>{{ purchasehistory.comment }}</td>
                </tr>
              </tbody>
          </table>
        </div>
        
        <!-- Modal -->
        <div class="modal fade" id="deleteConfirmation" tabindex="-1" role="dialog" aria-labelledby="deleteConfirmationLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
              <div class="modal-content">
                  <div class="modal-header">
                      <h6 class="modal-title" id="deleteConfirmationLabel">Confirmation</h6>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true" style="color:#fff">&times;</span>
                      </button>
                  </div>
                  <div class="modal-body">
                      <p style="color:#000;font-size:14px;">Are you sure you want to delete this payment?</p>
                  </div>
                  <div class="modal-footer">
                      <button type="button" class="btn admin-btn mobile-mb" data-dismiss="modal">Cancel</button>
                      <button type="button" class="btn admin-btn mobile-mb" style="background-color: #ff0000 !important;color: #fff;" @click="deleteRecord(paymentid)">Delete</button>
                  </div>
              </div>
          </div>
      </div>

      <!-- Modal -->
      <div class="modal fade" id="deletePurchaseConfirmation" tabindex="-1" role="dialog" aria-labelledby="deletePurchaseConfirmationLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
              <div class="modal-content">
                  <div class="modal-header">
                      <h6 class="modal-title" id="deletePurchaseConfirmationLabel">Confirmation</h6>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true" style="color:#fff">&times;</span>
                      </button>
                  </div>
                  <div class="modal-body">
                      <p style="color:#000;font-size:14px;">Are you sure you want to delete this Purchase Order?</p>
                  </div>
                  <div class="modal-footer">
                      <button type="button" class="btn admin-btn mobile-mb" data-dismiss="modal">Cancel</button>
                      <button type="button" class="btn admin-btn mobile-mb" style="background-color: #ff0000 !important;color: #fff;" @click="deletePurchaseOrder()">Delete</button>
                  </div>
              </div>
          </div>
      </div>
    
      <!-- Modal -->
      <div class="modal fade" id="dosign" tabindex="-1" role="dialog" aria-labelledby="dosign" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h6 class="modal-title" id="dosignh1">Add Signature</h6>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" style="color: #fff">&times;</span>
                    </button>
                </div>

                <div class="modal-body">
                  <label>Signature</label><br />
                  <VueSignaturePad width="560px" height="250px" ref="signaturePad" style="border:1px solid #ccc" :options="{onBegin: () => {$refs.signaturePad.resizeCanvas()}}"/>
                  <!-- <div>
                    <button @click="save">Save</button>
                    <button @click="undo">Undo</button>
                  </div> -->
                  <span v-if="no_sign" class="text-danger">Please add signature</span>
                  <br>
                  <label class="required-field">Signed By</label>
                  <input type="text" class="form-control form-control-user" placeholder="" v-model="signed_by" />
                </div>
                <div class="modal-footer">
                    <button type="button" @click="save" class="btn admin-btn mobile-mb btn-nwidth" style="background-color: #7adaaa !important">Save</button>
                    <button type="button" @click="undo" class="btn admin-btn mobile-mb btn-nwidth" style="background-color: #7adaaa !important">Undo</button>
                    <button type="button" data-dismiss="modal"
                    aria-label="Close" class="btn admin-btn mobile-mb btn-nwidth">Cancel</button>
                </div>
            </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
  import { thisTypeAnnotation } from '@babel/types';
import moment from 'moment';
import VueSignaturePad from "vue-signature-pad";
import Datepicker from 'vuejs-datepicker';
import VueHtml2pdf from 'vue-html2pdf';
export default {
  name: "Dashboard",
  components: {
    Datepicker,
    VueSignaturePad,
    VueHtml2pdf
  },
  data() {
    return {
      customerType: 'business',
      addpayment:'',
      theme: 'cust-type',
      formdata: {},
      companydata: {},
      rows: [],
      cashSelected: false,
      invoice_items: [{
          payment_date:Date.now(),
          totalamount:'',
          bank:'ICIC Bank Accounts',
          method:'Bank Transfer',
          comment:''
      }],
      tabflag:false,
      sidebarflag:false,
      paymentid:'',
      paymentcount:0,
      due_payment:'',
      invoice_status:'',
      payment_check:'',
      paymenttab:false,
      notestab:false,
      kyctab:false,
      selectedtab:'payment',
      note:'',
      over_paid:0,
      purchases:[],
      signed_by:'',
      no_sign:false,
      signaturedata: {
        signature_filename:'',
        signed_by:'',
      },
      sign_flag:'',
      output_tax:""
    };
  },
  methods:
  {
    dateFormateChanger(d){
      return moment(d,'YYYY-MM-DD').format('DD MMM YYYY')
     },
     sideClick(id){
      this.$router.push("/viewpurchase/"+id);
      location.reload()
     },
     dropdownCash(index){
      if(this.invoice_items[index].bank == 'Cash Account'){
        this.invoice_items[index].method = 'Cash';
        this.cashSelected = true;
      }
      else{
        this.cashSelected = false;
      }
     },
    sidebarToggle(){
      this.sidebarflag = !this.sidebarflag;
    },
    changetype(type)
    {
      this.customerType = type;
    },
    addLine(){
      this.addpayment='show';
    },
     removeLine(index)
    {
      this.addpayment='';
      //this.invoice_items.splice(index,1);
    },
    editpayment(paymentdata)
    {
      
    },
    tabclick(param){
      this.selectedtab=param;
    },
    async save_payment(index)
    {
      this.invoice_items[index].purchase_id = this.$route.params.id;
      var date = new Date(this.invoice_items[index].payment_date);
      this.invoice_items[index].payment_date=date;
      const response = await axios.post("create_purchasepayment", this.invoice_items[index]);
      if(response.data.id)
      {
        var arr={};
        arr.payment_date = response.data.payment_date;
        arr.method = this.invoice_items[index].method;
        arr.totalamount = this.invoice_items[index].totalamount;
        arr.id = response.data.id;
        this.formdata.purchasepayments.push(arr);
        this.addpayment='';
        this.paymentcount =this.paymentcount+1;
        //this.invoice_items.splice(index,1);
        this.due_payment = this.due_payment-this.invoice_items[index].totalamount;
        this.due_payment = this.due_payment.toFixed(2);
        if(this.due_payment<0)
        {
          this.over_paid = this.due_payment;
        }
        this.due_payment = (this.due_payment<0)?0:this.due_payment;
        
        this.invoice_items= [{
          payment_date:Date.now(),
          totalamount:'',
          bank:'ICIC Bank Accounts',
          method:'Bank Transfer',
          comment:''
        }];
        
        if(this.paymentcount==0)
        {
          this.invoice_status='UnPaid';
          this.payment_check='Yes';
        }
        else if(this.over_paid< 0)
        {
          this.invoice_status='Over Paid';
          this.payment_check='';
        }
        else if(this.due_payment==0)
        {
          this.invoice_status='Paid';
          this.payment_check='';
        }
        else
        {
          this.invoice_status='Partially Paid';
          this.payment_check='Yes';
        }
        this.statusdata={};
        this.statusdata.purchase_id = this.$route.params.id;
        //this.statusdata.status = (this.invoice_status=='Over Paid')?'Paid':this.invoice_status;
        this.statusdata.status = this.invoice_status;
        const response1 = axios.post("update_orderstatus", this.statusdata);
      }
      else
      {
        let toast = Vue.toasted.show('Something went wrong, Please try again', {
            theme: "toasted-error",
            position: "top-center",
            duration: 5000,
          });
      }
    },
    async save_note()
    {
      var notedata={purchase_id:this.$route.params.id,note:this.note};
      const response = await axios.post("create_purchasenote", notedata);
      if(response.data.id)
      {
        this.note='';
        let toast = Vue.toasted.show('Note successfully added', {
            theme: "toasted-success",
            position: "top-center",
            duration: 5000,
          });
      }
      else
      {
        let toast = Vue.toasted.show('Something went wrong, Please try again', {
            theme: "toasted-error",
            position: "top-center",
            duration: 5000,
          });
      }
    },
    selectrecord(id)
    {
      this.paymentid=id;
    },
    deleteRecord(id) {
      axios.get('/delete_purchasepayment/'+id)
        .then(resp => {
            this.$router.go();
        })
        .catch(error => {
          let message = 'Something went wrong, Please try again';
          let toast = Vue.toasted.show(message, {
            theme: "toasted-error",
            position: "top-center",
            duration: 5000,
          });
            console.log(error);
        })
    },
    deletePurchaseOrder() {
      axios.get('/delete_purchaseorder/'+this.$route.params.id)
        .then(resp => {
          this.$router.push("/purchase");
        })
        .catch(error => {
          let message = 'Something went wrong, Please try again';
          let toast = Vue.toasted.show(message, {
            theme: "toasted-error",
            position: "top-center",
            duration: 5000,
          });
            console.log(error);
        })
    },
    edit_invoice()
    {
      if(this.paymentcount>0)
      {
        alert('Please delete all the payments first!');
      }
      else
      {
        this.$router.push("/edit_purchase/"+this.$route.params.id);
      }
    },
    undo() {
      this.$refs.signaturePad.undoSignature();
    },
    async save() {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
      console.log(isEmpty);
      console.log(data);
      if(isEmpty)
      {
        this.no_sign=true;
      }
      else
      { 
        const response = await axios.post("add_signature", {'signature':data,'signedby':this.signed_by,'purchase_id':this.$route.params.id});
        if(response.data.id)
        {
          this.$router.go();
        }
        else
        {
          let toast = Vue.toasted.show('Something went wrong, Please try again', {
              theme: "toasted-error",
              position: "top-center",
              duration: 5000,
            });
        }
      }
    },
    generateReport () {
             this.$refs.html2Pdf.generatePdf()
      },
    async sendemail()
    {
        var maildata={};
        maildata.salesdata=this.formdata;
        maildata.salesdata.salesitem=this.formdata.purchaseitem;
        maildata.companydata = this.companydata;
        maildata.signaturedata = this.signaturedata;
        maildata.customeremail=this.formdata.customer_email;
        maildata.title = 'Purchase Order';
        const response = await axios.post(
            "send-email",
            maildata
        );
        
        if(response.data.status=="success")
        {
          let toast = Vue.toasted.show("Email has been sent successfully", {
            theme: "toasted-success",
            position: "top-center",
            duration: 5000,
          });
        }
        else
        {
          let toast = Vue.toasted.show('Something went wrong, Please try again', {
            theme: "toasted-error",
            position: "top-center",
            duration: 5000,
          });
        }
        // console.log('in');
        // axios.post('/send-email')
        // .then((response) => {
            
        // });
    },
    printDiv(divName) { 
          var printContents = document.getElementById(divName).innerHTML;
          var originalContents = document.body.innerHTML;
  
          document.body.innerHTML = printContents;
  
          window.print();
  
          document.body.innerHTML = originalContents;
      },
  },
  mounted()
  {
    axios.get('/saved_companydetails/')
        .then((response) => {
            this.companydata = response.data;
        })
        .catch(function(error) {
            //app.$notify(error.response.data.error, "error");
        });
    axios.get('/purchase_details/'+this.$route.params.id)
      .then((response) => {
          this.formdata = response.data;
          this.paymentcount = this.formdata.purchasepayments.length;
          if(response.data.payment_due<0)
          {
            this.over_paid = response.data.payment_due;
          }
          this.due_payment = (response.data.payment_due<0)?0:response.data.payment_due;
          this.output_tax=0;
          for(var j=0; j<this.formdata.purchaseitem.length; j++)
          {
            if(empty(this.formdata.purchaseitem[j].vat) && this.formdata.purchaseitem[j].metal_type=='gold')
            {
                this.output_tax += parseFloat(this.formdata.purchaseitem[j].invoice_amount)*20/100;
            }
          }
          if(this.paymentcount==0)
          {
            this.invoice_status='UnPaid';
            this.payment_check='Yes';
          }
          else if(this.over_paid< 0)
          {
            this.invoice_status='Over Paid';
            this.payment_check='';
          }
          else if(this.due_payment==0)
          {
            this.invoice_status='Paid';
            this.payment_check='';
          }
          else
          {
            this.invoice_status='Partially Paid';
            this.payment_check='Yes';
          }
      })
      .catch(function(error) {
          //app.$notify(error.response.data.error, "error");
      });

    axios.get('/purchase_history/'+this.$route.params.id)
      .then((response) => {
          this.formdata.purchasehistory = response.data;
      })
      .catch(function(error) {
          //app.$notify(error.response.data.error, "error");
      });

    axios.get('/purchase_list/')
    .then((response) => {
        this.purchases = response.data;
        console.log(this.purchases)
    })
    .catch(function(error) {
        //app.$notify(error.response.data.error, "error");
    });

    axios.get('/invoice_signature/'+this.$route.params.id)
      .then((response) => {
          this.signaturedata = response.data;
          this.sign_flag = response.data.signature_filename;
          this.signaturedata.signature_filename = '/uploads/'+response.data.signature_filename;
          console.log(this.signaturedata.signature_filename);
      })
      .catch(function(error) {
          //app.$notify(error.response.data.error, "error");
      });
  },
};
</script>
<style scoped>
 .pdf_section * {
          margin: 0;
          padding: 0;
          text-indent: 0;
        }
#createinvoice-datatable thead {
    background: #3376C2;
    color: #fff;
    font-size: 13px;
}
#createinvoice-datatable thead tr th {
    font-weight: 100 !important;
}
#createinvoice-datatable
{
  font-size: 13px;
  color: #000;
}
.purchasedata
{
  font-size: 13px;
  color: #000;
}
.btn-head{
  border-radius: 50%;

}
.btn-container{
  display: flex;
  justify-content: space-between !important;
  width:100% !important;
}
.selectedclr{
  background-color: #245388 !important;
  color: #fff !important;
}
.cont{
   
  width: auto;
    font-size: 13px  !important;
    color: #000;
    border:none;
    height: 40px;
    padding: 5px 20px;
    border-radius: 5px 5px 0px 0px;
}
.viewpurchase-div
{
  background: #fff;
  padding: 34px 23px 0px 23px;
  border-radius: 8px;
  box-shadow: 0px 10px 10px 0px rgb(0 0 0 / 10%);
}
.crt-invoice label
{
  font-size: 12px;
}
.crt-invoice
{
  padding: 0px 2%;
  color: #000;
}

.dark-theme-btn
{
  background-color: #245388 !important;
  color: #fff;
  width: 100px;
  font-size: 12px !important;
}
.light-theme-btn
{
  background-color: #EDF2F6 !important;
  color: #000;
  width: 100px;
  font-size: 12px !important;
}
.btn:focus, .btn.focus
{
  box-shadow: 0 0;
}
.table-div
{
  border-bottom: 1px solid #ccc;
}
.tab-selector
{
  border: 1px solid #D6E3F2 !important;
  height: 40px;
  border-radius: 5px;
  width: 100%;
  font-size: 13px;
}
.btn-addwidth
{
  width: 130px;
}
.sum-price ul
{
  list-style-type: none;
}
.sum-price li{
  padding: 5px 0px;
  font-size: 11px;
};
.viewpurchase-div > p {
    color: #3376C2;
    font-size: 12px;
}
.viewpurchase-div span {
    color: #000;
    font-size: 13px;
}
#purchasehistory-datatable thead
{
    background-color: #3376c2;
    color: #fff;
}
#purchasehistory-datatable thead th
{
    font-weight: 100;
}
.red-color
{
    color:red !important;
}
#dosign .modal-dialog
{
    max-width: 600px;
}
.container {
      padding: 0px 6%;
      margin-top: 0px;
  }
  
  .col-sm {
      padding: 0 10px;
  }
  .row {
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
  .s1 {
      color: black;
      font-family: Calibri, sans-serif;
      font-style: normal;
      font-weight: normal;
          text-decoration: none;
          font-size: 22pt;
        }
        .s3 {
          color: black;
          font-family: Calibri;
          font-style: normal;
          font-weight: normal;
          text-decoration: underline;
          font-size: 9px;
        }
        .s4,.s5 {
          color: black;
          font-family: Calibri;
          font-style: normal;
          font-weight: normal;
          text-decoration: none;
          font-size: 9px;
        }
      .pdf_cont  th, td{
          border-bottom:1px solid black;
          
        }
</style>
