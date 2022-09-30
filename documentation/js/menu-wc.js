'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">mk-chat-front-end documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-24307b8fb264fe26198fed31d0b1173dcf80d405913e64d381483835f97f566628f5e244fdb78d206a64699a9f7e68be3cb5fc812e0dec5618d29e2b3b08bc3f"' : 'data-target="#xs-components-links-module-AppModule-24307b8fb264fe26198fed31d0b1173dcf80d405913e64d381483835f97f566628f5e244fdb78d206a64699a9f7e68be3cb5fc812e0dec5618d29e2b3b08bc3f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-24307b8fb264fe26198fed31d0b1173dcf80d405913e64d381483835f97f566628f5e244fdb78d206a64699a9f7e68be3cb5fc812e0dec5618d29e2b3b08bc3f"' :
                                            'id="xs-components-links-module-AppModule-24307b8fb264fe26198fed31d0b1173dcf80d405913e64d381483835f97f566628f5e244fdb78d206a64699a9f7e68be3cb5fc812e0dec5618d29e2b3b08bc3f"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TableLightComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableLightComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoreModule-3c47bc1628dc69bd4920e7dcb9cace293bcf83b9511f5faa4761a5987338aeb5ffaa36d85c1ec6e24a357922d22036bb7bf843a3d30335fcdc70e3425b33373b"' : 'data-target="#xs-components-links-module-CoreModule-3c47bc1628dc69bd4920e7dcb9cace293bcf83b9511f5faa4761a5987338aeb5ffaa36d85c1ec6e24a357922d22036bb7bf843a3d30335fcdc70e3425b33373b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-3c47bc1628dc69bd4920e7dcb9cace293bcf83b9511f5faa4761a5987338aeb5ffaa36d85c1ec6e24a357922d22036bb7bf843a3d30335fcdc70e3425b33373b"' :
                                            'id="xs-components-links-module-CoreModule-3c47bc1628dc69bd4920e7dcb9cace293bcf83b9511f5faa4761a5987338aeb5ffaa36d85c1ec6e24a357922d22036bb7bf843a3d30335fcdc70e3425b33373b"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormMessageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormMessageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/IconsModule.html" data-type="entity-link" >IconsModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MessagesModule.html" data-type="entity-link" >MessagesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MessagesModule-830fd8a76a72a221a08e707d19cf2979b3978dd0f808cfec247521db03d9a53d8ba353b5de0ac5c546d250467efeb6eee6a59bba84ec79508081db0046580680"' : 'data-target="#xs-components-links-module-MessagesModule-830fd8a76a72a221a08e707d19cf2979b3978dd0f808cfec247521db03d9a53d8ba353b5de0ac5c546d250467efeb6eee6a59bba84ec79508081db0046580680"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MessagesModule-830fd8a76a72a221a08e707d19cf2979b3978dd0f808cfec247521db03d9a53d8ba353b5de0ac5c546d250467efeb6eee6a59bba84ec79508081db0046580680"' :
                                            'id="xs-components-links-module-MessagesModule-830fd8a76a72a221a08e707d19cf2979b3978dd0f808cfec247521db03d9a53d8ba353b5de0ac5c546d250467efeb6eee6a59bba84ec79508081db0046580680"' }>
                                            <li class="link">
                                                <a href="components/PageListMessagesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageListMessagesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MessagesRoutingModule.html" data-type="entity-link" >MessagesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/OrdersRoutingModule.html" data-type="entity-link" >OrdersRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PageNotFoundModule.html" data-type="entity-link" >PageNotFoundModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PageNotFoundModule-3c893e191c1ad9a1b359d878927d0ecc6b38b0c732938f694705e0730e3a8a20f4fbeca08f9da5913e958b383576a6bc46c731c36024617fcc17c34eaef864da"' : 'data-target="#xs-components-links-module-PageNotFoundModule-3c893e191c1ad9a1b359d878927d0ecc6b38b0c732938f694705e0730e3a8a20f4fbeca08f9da5913e958b383576a6bc46c731c36024617fcc17c34eaef864da"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PageNotFoundModule-3c893e191c1ad9a1b359d878927d0ecc6b38b0c732938f694705e0730e3a8a20f4fbeca08f9da5913e958b383576a6bc46c731c36024617fcc17c34eaef864da"' :
                                            'id="xs-components-links-module-PageNotFoundModule-3c893e191c1ad9a1b359d878927d0ecc6b38b0c732938f694705e0730e3a8a20f4fbeca08f9da5913e958b383576a6bc46c731c36024617fcc17c34eaef864da"' }>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageNotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TchatroomsModule.html" data-type="entity-link" >TchatroomsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TchatroomsModule-fee5943194e8c61770bd67f8d1a04fde8d4d7b93ab864684753965d0f1586be4297c767b60b83d17a00b0633f43ea445f97e2acd466cea744bc1ae587f7e518d"' : 'data-target="#xs-components-links-module-TchatroomsModule-fee5943194e8c61770bd67f8d1a04fde8d4d7b93ab864684753965d0f1586be4297c767b60b83d17a00b0633f43ea445f97e2acd466cea744bc1ae587f7e518d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TchatroomsModule-fee5943194e8c61770bd67f8d1a04fde8d4d7b93ab864684753965d0f1586be4297c767b60b83d17a00b0633f43ea445f97e2acd466cea744bc1ae587f7e518d"' :
                                            'id="xs-components-links-module-TchatroomsModule-fee5943194e8c61770bd67f8d1a04fde8d4d7b93ab864684753965d0f1586be4297c767b60b83d17a00b0633f43ea445f97e2acd466cea744bc1ae587f7e518d"' }>
                                            <li class="link">
                                                <a href="components/FormTchatroomsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormTchatroomsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageAddTchatroomComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageAddTchatroomComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageListTchatroomComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageListTchatroomComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TemplatesModule.html" data-type="entity-link" >TemplatesModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UiModule.html" data-type="entity-link" >UiModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UiModule-ce4f05351cc0ae5abf7d14c381c41132e5ba845448bb9786daab3bcddb2f34de5295d7568594e4e12269208c3b11473ca5d3cce31dd45b5c6d864ad9c9a91b80"' : 'data-target="#xs-components-links-module-UiModule-ce4f05351cc0ae5abf7d14c381c41132e5ba845448bb9786daab3bcddb2f34de5295d7568594e4e12269208c3b11473ca5d3cce31dd45b5c6d864ad9c9a91b80"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UiModule-ce4f05351cc0ae5abf7d14c381c41132e5ba845448bb9786daab3bcddb2f34de5295d7568594e4e12269208c3b11473ca5d3cce31dd45b5c6d864ad9c9a91b80"' :
                                            'id="xs-components-links-module-UiModule-ce4f05351cc0ae5abf7d14c381c41132e5ba845448bb9786daab3bcddb2f34de5295d7568594e4e12269208c3b11473ca5d3cce31dd45b5c6d864ad9c9a91b80"' }>
                                            <li class="link">
                                                <a href="components/UiComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UiComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/PageEditTchatroomComponent.html" data-type="entity-link" >PageEditTchatroomComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Message.html" data-type="entity-link" >Message</a>
                            </li>
                            <li class="link">
                                <a href="classes/Tchatroom.html" data-type="entity-link" >Tchatroom</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/MessagesService.html" data-type="entity-link" >MessagesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TchatroomService.html" data-type="entity-link" >TchatroomService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Tchatroom.html" data-type="entity-link" >Tchatroom</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});