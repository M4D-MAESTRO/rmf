(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~contmesa-contmesa-module~ficha-ficha-module~germesas-germesas-module~teste-teste-module"],{

/***/ "./src/app/services/mesas/mesas.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/mesas/mesas.service.ts ***!
  \*************************************************/
/*! exports provided: MesasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MesasService", function() { return MesasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _storage_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/config/api.config */ "./src/app/config/api.config.ts");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user/user.service */ "./src/app/services/user/user.service.ts");






let MesasService = class MesasService {
    constructor(http, storage, userService) {
        this.http = http;
        this.storage = storage;
        this.userService = userService;
        this.mesaSelecionada = '';
        this.componenetAtual = 'info';
        this.addJogador = (idJogador, idMesa) => {
            // console.log(this.objAuxiliar)
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('idJogador', idJogador)
                .set('idMesa', idMesa);
            return this.http.put(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl}mesa/add/jogador`, this.objAuxiliar, {
                params: params
            });
        };
        this.removJogador = (idJogador, idMesa) => {
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('idJogador', idJogador)
                .set('idMesa', idMesa);
            return this.http.put(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl}mesa/remov/jogador`, null, {
                params: params
            });
        };
        this.findMesa = (idMesa) => {
            return this.http.get(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl}mesa/${idMesa}`, {
                responseType: 'json'
            });
        };
        this.addRegra = (idRegra, idRpg) => {
            console.log(idRegra);
            console.log(idRpg);
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('idSistema', idRegra)
                .set('idRpg', idRpg);
            return this.http.put(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl}rpg/add/sistema`, null, {
                params: params
            });
        };
        this.removRegra = (idRegra, idRpg) => {
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('idSistema', idRegra)
                .set('idRpg', idRpg);
            return this.http.put(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl}rpg/remov/sistema`, null, {
                params: params
            });
        };
        this.addNpc = (idNpc, idMesa, tipo) => {
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('idNpc', idNpc)
                .set('idMesa', idMesa)
                .set('tipo', tipo);
            return this.http.put(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl}mesa/add/npc`, null, {
                params: params
            });
        };
        this.removNpc = (idNpc, idMesa, tipo) => {
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('idNpc', idNpc)
                .set('idMesa', idMesa)
                .set('tipo', tipo);
            return this.http.put(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl}mesa/remov/npc`, null, {
                params: params
            });
        };
        this.updateNpcBasic = (idNpc, idMesa, dto) => {
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('idNpc', idNpc)
                .set('idMesa', idMesa);
            return this.http.put(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl}mesa/update/npc/basic`, dto, {
                params: params
            });
        };
        this.addFaccao = (idFaccao, idMesa, tipo) => {
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('idFaccao', idFaccao)
                .set('idMesa', idMesa)
                .set('tipo', tipo);
            return this.http.put(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl}mesa/add/faccao`, null, {
                params: params
            });
        };
        this.removFaccao = (idFaccao, idMesa, tipo) => {
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('idFaccao', idFaccao)
                .set('idMesa', idMesa)
                .set('tipo', tipo);
            return this.http.put(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl}mesa/remov/faccao`, null, {
                params: params
            });
        };
        this.addCapitulos = (idCapitulo, idMesa) => {
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('idCapitulo', idCapitulo)
                .set('idMesa', idMesa);
            return this.http.put(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl}mesa/add/capitulo`, null, {
                params: params
            });
        };
        this.removCapitulos = (idCapitulo, idMesa) => {
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('idCapitulo', idCapitulo)
                .set('idMesa', idMesa);
            return this.http.put(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl}mesa/remov/capitulo`, null, {
                params: params
            });
        };
        this.addMapa = (idMapa, idMesa) => {
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('idMapa', idMapa)
                .set('idMesa', idMesa);
            return this.http.put(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl}mesa/add/mapa`, null, {
                params: params
            });
        };
        this.removMapa = (idMapa, idMesa) => {
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('idMapa', idMapa)
                .set('idMesa', idMesa);
            return this.http.put(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl}mesa/remov/mapa`, null, {
                params: params
            });
        };
        this.updateFaccao = (idFaccao, idMesa, dto) => {
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('idFaccao', idFaccao)
                .set('idMesa', idMesa);
            const newDto = {
                id: idFaccao,
                nome: dto.nome,
                descricao: dto.descricao,
                objetivo: dto.objetivo,
                imgURL: dto.imgURL,
                isPrivate: false
            };
            return this.http.put(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl}mesa/update/faccao`, newDto, {
                params: params
            });
        };
        this.findFaccao = (idFaccao, idMesa, tipo) => {
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('idFaccao', idFaccao)
                .set('idMesa', idMesa)
                .set('tipo', tipo);
            return this.http.get(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl}mesa/faccao`, {
                params
            });
        };
        this.findNpc = (idNpc, idMesa) => {
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('idNpc', idNpc)
                .set('idMesa', idMesa);
            return this.http.get(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl}mesa/npc`, {
                params
            });
        };
        this.findCapitulo = (idCapitulo, idMesa) => {
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('idCapitulo', idCapitulo)
                .set('idMesa', idMesa);
            return this.http.get(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl}mesa/capitulo`, {
                params
            });
        };
        this.updateCapitulo = (idCapitulo, idMesa, dto) => {
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('idCapitulo', idCapitulo)
                .set('idMesa', idMesa);
            return this.http.put(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl}mesa/update/capitulo`, dto, {
                params: params
            });
        };
        this.findMapa = (idMapa, idMesa) => {
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('idMapa', idMapa)
                .set('idMesa', idMesa);
            return this.http.get(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl}mesa/mapa`, {
                params
            });
        };
        this.updateMapa = (idMapa, idMesa, dto) => {
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('idMapa', idMapa)
                .set('idMesa', idMesa);
            const newDto = {
                id: idMapa,
                nome: dto.nome,
                descricao: dto.descricao,
                urlMapa: dto.urlMapa
            };
            return this.http.put(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl}mesa/update/mapa`, newDto, {
                params: params
            });
        };
        this.updateStatusMissao = (idCapitulo, idMesa, idMissao, statusMissao) => {
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('idCapitulo', idCapitulo)
                .set('idMesa', idMesa)
                .set('idMissao', idMissao)
                .set('statusMissao', statusMissao);
            return this.http.put(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl}mesa/update/missao`, null, {
                params: params
            });
        };
    }
    getStaticID() {
        return this.staticID;
    }
    setStaticID(id) {
        this.staticID = id;
    }
    getMesaSelecionada() {
        return this.mesaSelecionada;
    }
    setComponentAtual(componenetAtual) {
        this.componenetAtual = componenetAtual;
    }
    getComponentAtual() {
        return this.componenetAtual;
    }
    resetComponentAtual() {
        this.componenetAtual = undefined;
    }
    setObjAuxiliar(objAuxiliar) {
        this.objAuxiliar = objAuxiliar;
    }
    getObjAuxiliar() {
        return this.objAuxiliar;
    }
    resetObjAuxiliar() {
        this.objAuxiliar = undefined;
    }
    findListMesasParticipante() {
        return this.http.get(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl}mesa/user`, {
            responseType: 'json',
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('idUser', this.storage.getLocalUserId())
        });
    }
    findListMesasMestrando() {
        return this.http.get(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl}mesa/mestre`, {
            responseType: 'json',
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('idUser', this.storage.getLocalUserId())
        });
    }
    findListMesasBoth() {
        return this.http.get(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl}mesa/both`, {
            responseType: 'json',
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('idUser', this.storage.getLocalUserId())
        });
    }
    insert(dto) {
        return this.http.post(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl}mesa`, dto);
    }
    findMesaInicial() {
        return this.http.get(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl}mesa/inicial/${this.mesaSelecionada}`, {
            responseType: 'json'
        });
    }
    setIdMesaSelecionada(idMesa) {
        this.mesaSelecionada = idMesa;
    }
    getIdMesaSelecionada() {
        return this.mesaSelecionada;
    }
    allowEmail(jogador) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let response;
            if (jogador.includes('@')) {
                yield this.userService.findByEmail(jogador)
                    .subscribe(res => { response = res.id; /*console.log(res.id)*/ }, error => { response = error; console.log('error', error); });
                return response;
            }
            else {
                return jogador;
            }
        });
    }
    addRegraNew(idMesa, obj) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('idMesa', idMesa);
        return this.http.put(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl}mesa/add/regra`, obj, {
            responseType: "json",
            observe: "body",
            params
        });
    }
    removRegraNew(idRegra, idMesa) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('idMesa', idMesa)
            .set('idRegra', idRegra);
        return this.http.put(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl}mesa/remov/regra`, null, {
            params
        });
    }
};
MesasService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _storage_service_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] },
    { type: _user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
];
MesasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _storage_service_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"], _user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
], MesasService);



/***/ }),

/***/ "./src/app/services/user/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/config/api.config */ "./src/app/config/api.config.ts");
/* harmony import */ var _storage_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage-service.service */ "./src/app/services/storage-service.service.ts");





let UserService = class UserService {
    constructor(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    findByEmail(email) {
        return this.http.get(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl}users/${email}`);
    }
    findById(id) {
        return this.http.get(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl}users/id/${id}`);
    }
    insertNew(obj) {
        return this.http.post(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl}users`, obj);
    }
    updateImgUser(dto) {
        return this.http.patch(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl}users`, dto, {
            responseType: 'json',
            observe: 'response'
        });
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]])
], UserService);



/***/ })

}]);
//# sourceMappingURL=default~contmesa-contmesa-module~ficha-ficha-module~germesas-germesas-module~teste-teste-module-es2015.js.map