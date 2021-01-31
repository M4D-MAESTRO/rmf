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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _storage_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/config/api.config */ "./src/app/config/api.config.ts");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user/user.service */ "./src/app/services/user/user.service.ts");






var MesasService = /** @class */ (function () {
    function MesasService(http, storage, userService) {
        var _this = this;
        this.http = http;
        this.storage = storage;
        this.userService = userService;
        this.mesaSelecionada = '';
        this.componenetAtual = 'info';
        this.addJogador = function (idJogador, idMesa) {
            // console.log(this.objAuxiliar)
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('idJogador', idJogador)
                .set('idMesa', idMesa);
            return _this.http.put(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "mesa/add/jogador", _this.objAuxiliar, {
                params: params
            });
        };
        this.removJogador = function (idJogador, idMesa) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('idJogador', idJogador)
                .set('idMesa', idMesa);
            return _this.http.put(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "mesa/remov/jogador", null, {
                params: params
            });
        };
        this.findMesa = function (idMesa) {
            return _this.http.get(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "mesa/" + idMesa, {
                responseType: 'json'
            });
        };
        this.addRegra = function (idRegra, idRpg) {
            console.log(idRegra);
            console.log(idRpg);
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('idSistema', idRegra)
                .set('idRpg', idRpg);
            return _this.http.put(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "rpg/add/sistema", null, {
                params: params
            });
        };
        this.removRegra = function (idRegra, idRpg) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('idSistema', idRegra)
                .set('idRpg', idRpg);
            return _this.http.put(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "rpg/remov/sistema", null, {
                params: params
            });
        };
        this.addNpc = function (idNpc, idMesa, tipo) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('idNpc', idNpc)
                .set('idMesa', idMesa)
                .set('tipo', tipo);
            return _this.http.put(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "mesa/add/npc", null, {
                params: params
            });
        };
        this.removNpc = function (idNpc, idMesa, tipo) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('idNpc', idNpc)
                .set('idMesa', idMesa)
                .set('tipo', tipo);
            return _this.http.put(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "mesa/remov/npc", null, {
                params: params
            });
        };
        this.updateNpcBasic = function (idNpc, idMesa, dto) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('idNpc', idNpc)
                .set('idMesa', idMesa);
            return _this.http.put(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "mesa/update/npc/basic", dto, {
                params: params
            });
        };
        this.addFaccao = function (idFaccao, idMesa, tipo) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('idFaccao', idFaccao)
                .set('idMesa', idMesa)
                .set('tipo', tipo);
            return _this.http.put(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "mesa/add/faccao", null, {
                params: params
            });
        };
        this.removFaccao = function (idFaccao, idMesa, tipo) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('idFaccao', idFaccao)
                .set('idMesa', idMesa)
                .set('tipo', tipo);
            return _this.http.put(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "mesa/remov/faccao", null, {
                params: params
            });
        };
        this.addCapitulos = function (idCapitulo, idMesa) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('idCapitulo', idCapitulo)
                .set('idMesa', idMesa);
            return _this.http.put(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "mesa/add/capitulo", null, {
                params: params
            });
        };
        this.removCapitulos = function (idCapitulo, idMesa) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('idCapitulo', idCapitulo)
                .set('idMesa', idMesa);
            return _this.http.put(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "mesa/remov/capitulo", null, {
                params: params
            });
        };
        this.addMapa = function (idMapa, idMesa) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('idMapa', idMapa)
                .set('idMesa', idMesa);
            return _this.http.put(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "mesa/add/mapa", null, {
                params: params
            });
        };
        this.removMapa = function (idMapa, idMesa) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('idMapa', idMapa)
                .set('idMesa', idMesa);
            return _this.http.put(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "mesa/remov/mapa", null, {
                params: params
            });
        };
        this.updateFaccao = function (idFaccao, idMesa, dto) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('idFaccao', idFaccao)
                .set('idMesa', idMesa);
            var newDto = {
                id: idFaccao,
                nome: dto.nome,
                descricao: dto.descricao,
                objetivo: dto.objetivo,
                imgURL: dto.imgURL,
                isPrivate: false
            };
            return _this.http.put(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "mesa/update/faccao", newDto, {
                params: params
            });
        };
        this.findFaccao = function (idFaccao, idMesa, tipo) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('idFaccao', idFaccao)
                .set('idMesa', idMesa)
                .set('tipo', tipo);
            return _this.http.get(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "mesa/faccao", {
                params: params
            });
        };
        this.findNpc = function (idNpc, idMesa) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('idNpc', idNpc)
                .set('idMesa', idMesa);
            return _this.http.get(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "mesa/npc", {
                params: params
            });
        };
        this.findCapitulo = function (idCapitulo, idMesa) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('idCapitulo', idCapitulo)
                .set('idMesa', idMesa);
            return _this.http.get(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "mesa/capitulo", {
                params: params
            });
        };
        this.updateCapitulo = function (idCapitulo, idMesa, dto) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('idCapitulo', idCapitulo)
                .set('idMesa', idMesa);
            return _this.http.put(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "mesa/update/capitulo", dto, {
                params: params
            });
        };
        this.findMapa = function (idMapa, idMesa) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('idMapa', idMapa)
                .set('idMesa', idMesa);
            return _this.http.get(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "mesa/mapa", {
                params: params
            });
        };
        this.updateMapa = function (idMapa, idMesa, dto) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('idMapa', idMapa)
                .set('idMesa', idMesa);
            var newDto = {
                id: idMapa,
                nome: dto.nome,
                descricao: dto.descricao,
                urlMapa: dto.urlMapa
            };
            return _this.http.put(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "mesa/update/mapa", newDto, {
                params: params
            });
        };
        this.updateStatusMissao = function (idCapitulo, idMesa, idMissao, statusMissao) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('idCapitulo', idCapitulo)
                .set('idMesa', idMesa)
                .set('idMissao', idMissao)
                .set('statusMissao', statusMissao);
            return _this.http.put(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "mesa/update/missao", null, {
                params: params
            });
        };
    }
    MesasService.prototype.getStaticID = function () {
        return this.staticID;
    };
    MesasService.prototype.setStaticID = function (id) {
        this.staticID = id;
    };
    MesasService.prototype.getMesaSelecionada = function () {
        return this.mesaSelecionada;
    };
    MesasService.prototype.setComponentAtual = function (componenetAtual) {
        this.componenetAtual = componenetAtual;
    };
    MesasService.prototype.getComponentAtual = function () {
        return this.componenetAtual;
    };
    MesasService.prototype.resetComponentAtual = function () {
        this.componenetAtual = undefined;
    };
    MesasService.prototype.setObjAuxiliar = function (objAuxiliar) {
        this.objAuxiliar = objAuxiliar;
    };
    MesasService.prototype.getObjAuxiliar = function () {
        return this.objAuxiliar;
    };
    MesasService.prototype.resetObjAuxiliar = function () {
        this.objAuxiliar = undefined;
    };
    MesasService.prototype.findListMesasParticipante = function () {
        return this.http.get(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "mesa/user", {
            responseType: 'json',
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('idUser', this.storage.getLocalUserId())
        });
    };
    MesasService.prototype.findListMesasMestrando = function () {
        return this.http.get(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "mesa/mestre", {
            responseType: 'json',
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('idUser', this.storage.getLocalUserId())
        });
    };
    MesasService.prototype.findListMesasBoth = function () {
        return this.http.get(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "mesa/both", {
            responseType: 'json',
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('idUser', this.storage.getLocalUserId())
        });
    };
    MesasService.prototype.insert = function (dto) {
        return this.http.post(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "mesa", dto);
    };
    MesasService.prototype.findMesaInicial = function () {
        return this.http.get(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "mesa/inicial/" + this.mesaSelecionada, {
            responseType: 'json'
        });
    };
    MesasService.prototype.findMesaInicial2 = function (idMesa) {
        // console.log( `${API_CONFIG.baseUrl}mesa/inicial/${idMesa}`);
        return this.http.get(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "mesa/inicial/" + idMesa, {
            responseType: 'json'
        });
    };
    MesasService.prototype.setIdMesaSelecionada = function (idMesa) {
        this.mesaSelecionada = idMesa;
    };
    MesasService.prototype.getIdMesaSelecionada = function () {
        return this.mesaSelecionada;
    };
    MesasService.prototype.allowEmail = function (jogador) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var response;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!jogador.includes('@')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.userService.findByEmail(jogador)
                                .subscribe(function (res) { response = res.id; /*console.log(res.id)*/ }, function (error) { response = error; console.log('error', error); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, response];
                    case 2: return [2 /*return*/, jogador];
                }
            });
        });
    };
    MesasService.prototype.addRegraNew = function (idMesa, obj) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('idMesa', idMesa);
        return this.http.put(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "mesa/add/regra", obj, {
            responseType: "json",
            observe: "body",
            params: params
        });
    };
    MesasService.prototype.removRegraNew = function (idRegra, idMesa) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('idMesa', idMesa)
            .set('idRegra', idRegra);
        return this.http.put(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "mesa/remov/regra", null, {
            params: params
        });
    };
    MesasService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _storage_service_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] },
        { type: _user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
    ]; };
    MesasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _storage_service_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"], _user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], MesasService);
    return MesasService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/config/api.config */ "./src/app/config/api.config.ts");
/* harmony import */ var _storage_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage-service.service */ "./src/app/services/storage-service.service.ts");





var UserService = /** @class */ (function () {
    function UserService(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    UserService.prototype.findByEmail = function (email) {
        return this.http.get(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl + "users/" + email);
    };
    UserService.prototype.findById = function (id) {
        return this.http.get(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl + "users/id/" + id);
    };
    UserService.prototype.insertNew = function (obj) {
        return this.http.post(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl + "users", obj);
    };
    UserService.prototype.updateImgUser = function (dto) {
        return this.http.patch(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl + "users", dto, {
            responseType: 'json',
            observe: 'response'
        });
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]])
    ], UserService);
    return UserService;
}());



/***/ })

}]);
//# sourceMappingURL=default~contmesa-contmesa-module~ficha-ficha-module~germesas-germesas-module~teste-teste-module-es5.js.map