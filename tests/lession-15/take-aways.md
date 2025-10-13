1. summary
2. built test framemwork
    2.1. CHonj framework: 
        - server
        - ..
    VD: 
    1. Phân tích sản phẩm = mindmap
        - trong sp có mấy môi trường: dev, prod
        - trong sp có mấy page: 
            + dashboard
                - dashboardPage
                - postPage
                - mediaPage
                - PagePages
                - ....
            + store: 
                - basePage
                - homepage
                - productPage
                - mypeoductpage
                - cartpage
                - checkoutPage
        - structure(tổ chức floder):
            + src: 
                - POM: 
                    + page
                        - store: 
                            + store.page.ts
                                - basePage
                                - homepage
                                - productPage
                                - mypeoductpage
                                - cartpage
                                - checkoutPage
                        - dashboard
                            + store.page.ts
                                - dashboardPage
                                - postPage
                                - mediaPage
                                - PagePages
                                - ....
                    + API
                - utils
                    + string
                    + number
                    + common
                    + report
                    + slack
                - fixture
                    + login
                    + token
            + test: 
                - checkout: 
                    + paypal
                        - paypalstandard
                        - paypalexpress
                    + spay
    2. Tổ chức các folder 
            
3. CI/CD