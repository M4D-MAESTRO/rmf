(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~contmesa-contmesa-module~explorar-explore-capitulo-explore-capitulo-module~explorar-explore-~8c31e54e"],{

/***/ "./src/app/config/rpg.config.ts":
/*!**************************************!*\
  !*** ./src/app/config/rpg.config.ts ***!
  \**************************************/
/*! exports provided: MedievalRPG, CyberpunkRPG, SteampunkRPG, HorrorRPG, tipoRPG, tipoArrayRPG, Arma_Ataque, Armadura_Defesa, Utilizavel, tipoITEM, TipoItem, Corte, Esmagamento, Perfuacao, tipoARMA, Cabeca, Tronco, Bracos, Pernas, Escudo, tipoDEFESA, Consumivel, Aplicavel, Equipavel, tipoUTILIZAVEL, PRINCIPAL, SECUNDARIA, ATIVIDADE, EVENTO, TipoMissao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedievalRPG", function() { return MedievalRPG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CyberpunkRPG", function() { return CyberpunkRPG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SteampunkRPG", function() { return SteampunkRPG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorrorRPG", function() { return HorrorRPG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tipoRPG", function() { return tipoRPG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tipoArrayRPG", function() { return tipoArrayRPG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Arma_Ataque", function() { return Arma_Ataque; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Armadura_Defesa", function() { return Armadura_Defesa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utilizavel", function() { return Utilizavel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tipoITEM", function() { return tipoITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoItem", function() { return TipoItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Corte", function() { return Corte; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Esmagamento", function() { return Esmagamento; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Perfuacao", function() { return Perfuacao; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tipoARMA", function() { return tipoARMA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cabeca", function() { return Cabeca; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tronco", function() { return Tronco; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bracos", function() { return Bracos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pernas", function() { return Pernas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Escudo", function() { return Escudo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tipoDEFESA", function() { return tipoDEFESA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consumivel", function() { return Consumivel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Aplicavel", function() { return Aplicavel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Equipavel", function() { return Equipavel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tipoUTILIZAVEL", function() { return tipoUTILIZAVEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRINCIPAL", function() { return PRINCIPAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SECUNDARIA", function() { return SECUNDARIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATIVIDADE", function() { return ATIVIDADE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENTO", function() { return EVENTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoMissao", function() { return TipoMissao; });
/*TIPOS RPG*/
var MedievalRPG = 0;
var CyberpunkRPG = 1;
var SteampunkRPG = 2;
var HorrorRPG = 3;
var tipoRPG = { MedievalRPG: MedievalRPG, CyberpunkRPG: CyberpunkRPG, SteampunkRPG: SteampunkRPG, HorrorRPG: HorrorRPG };
var tipoArrayRPG = ['Medieval', 'Cyberpunk', 'Steampunk', 'Horror'];
/*TIPOS ITENS*/
var Arma_Ataque = 0;
var Armadura_Defesa = 1;
var Utilizavel = 2;
var tipoITEM = { Arma_Ataque: Arma_Ataque, Armadura_Defesa: Armadura_Defesa, Utilizavel: Utilizavel };
var TipoItem = [{
        value: Arma_Ataque,
        template: 'Ataque'
    },
    {
        value: Armadura_Defesa,
        template: 'Defesa'
    },
    {
        value: Utilizavel,
        template: 'Utilizavel'
    }
];
/*TIPOS ARMAS*/
var Corte = 0;
var Esmagamento = 1;
var Perfuacao = 2;
var tipoARMA = { Corte: Corte, Esmagamento: Esmagamento, Perfuacao: Perfuacao };
/*TIPOS DEFESA*/
var Cabeca = 0;
var Tronco = 1;
var Bracos = 2;
var Pernas = 3;
var Escudo = 4;
var tipoDEFESA = { Cabeca: Cabeca, Tronco: Tronco, Bracos: Bracos, Pernas: Pernas, Escudo: Escudo };
/*TIPOS Utilizavel*/
var Consumivel = 0;
var Aplicavel = 1;
var Equipavel = 2;
var tipoUTILIZAVEL = { Consumivel: Consumivel, Aplicavel: Aplicavel, Equipavel: Equipavel };
/*TIPOS MISSAO*/
var PRINCIPAL = 0;
var SECUNDARIA = 1;
var ATIVIDADE = 2;
var EVENTO = 3;
var TipoMissao = [{
        value: PRINCIPAL,
        template: 'Principal'
    },
    {
        value: SECUNDARIA,
        template: 'Secundária'
    },
    {
        value: ATIVIDADE,
        template: 'Atividade'
    },
    {
        value: EVENTO,
        template: 'Evento'
    },
];


/***/ }),

/***/ "./src/app/services/criacoes/criar-item.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/criacoes/criar-item.service.ts ***!
  \*********************************************************/
/*! exports provided: CriarItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriarItemService", function() { return CriarItemService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CriarItemService = /** @class */ (function () {
    function CriarItemService() {
    }
    CriarItemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], CriarItemService);
    return CriarItemService;
}());



/***/ }),

/***/ "./src/app/services/especializacao/especializacao.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/services/especializacao/especializacao.service.ts ***!
  \*******************************************************************/
/*! exports provided: EspecializacaoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EspecializacaoService", function() { return EspecializacaoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/config/api.config */ "./src/app/config/api.config.ts");




var EspecializacaoService = /** @class */ (function () {
    function EspecializacaoService(http) {
        this.http = http;
    }
    EspecializacaoService.prototype.insert = function (dto, idFicha, idAtributo) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('idFicha', idFicha)
            .set('idAtributo', idAtributo);
        return this.http.post(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl + "especializacao", dto, {
            params: params
        });
    };
    EspecializacaoService.prototype.setFav = function (idEspecializacao, fav) {
        console.log(fav);
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('idEspecializacao', idEspecializacao)
            .set('fav', fav);
        return this.http.put(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl + "especializacao", {}, {
            params: params
        });
    };
    EspecializacaoService.prototype.delete = function (idFicha, idAtributo, idEspecializacao) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('idFicha', idFicha)
            .set('idAtributo', idAtributo)
            .set('idEspecializacao', idEspecializacao);
        console.log('ficha: ', idFicha, 'atrib: ', idAtributo, 'espec: ', idEspecializacao);
        return this.http.delete(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl + "especializacao", {
            params: params
        });
    };
    EspecializacaoService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    EspecializacaoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EspecializacaoService);
    return EspecializacaoService;
}());



/***/ }),

/***/ "./src/app/services/gameplay/equipar-item.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/gameplay/equipar-item.service.ts ***!
  \***********************************************************/
/*! exports provided: EquiparItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquiparItemService", function() { return EquiparItemService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _criacoes_criar_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../criacoes/criar-item.service */ "./src/app/services/criacoes/criar-item.service.ts");




var EquiparItemService = /** @class */ (function () {
    function EquiparItemService(alertController, itemService) {
        this.alertController = alertController;
        this.itemService = itemService;
        this.ataquesEquipados = [];
        this.defesasEquipadas = [];
        //  this.equiparAtaque(itemService.getItemById(1));
    }
    EquiparItemService.prototype.equiparAtaque = function (newArma) {
        var _this = this;
        if (this.ataquesEquipados.length == 0) {
            this.ataquesEquipados.push(newArma);
            this.presentMessage(newArma.nome + " equipada com sucesso!");
        }
        else if (this.ataquesEquipados.length == 5) {
            console.log('primeiro if');
            this.presentMessage("Número máximo de itens de ataque equipados atingido. Desequipe algum antes de continuar");
        }
        else {
            this.ataquesEquipados.forEach(function (arma, index) {
                console.log('forEach');
                if (arma.id != newArma.id) {
                    console.log('Segundo if');
                    _this.ataquesEquipados.push(newArma);
                    _this.presentMessage(newArma.nome + " equipada com sucesso!");
                }
                else if (arma.id == newArma.id) {
                    console.log('Terceiro if');
                    _this.ataquesEquipados.splice(index, 1);
                    _this.presentMessage(newArma.nome + " desequipada com sucesso!");
                }
            });
        }
    };
    EquiparItemService.prototype.desequiparAtaque = function (newArma) {
        var _this = this;
        if (this.ataquesEquipados.length == 0) {
            this.presentMessage("Não há itens de ataque equipados!");
        }
        else {
            this.ataquesEquipados.forEach(function (arma, index) {
                if (arma.id != newArma.id) {
                    _this.presentMessage(arma.nome + " não estava equipada.");
                }
                else if (arma.id == newArma.id) {
                    _this.ataquesEquipados.splice(index, 1);
                    _this.presentMessage(arma.nome + " desequipada com sucesso!");
                }
            });
        }
    };
    EquiparItemService.prototype.presentMessage = function (mensagem) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            message: mensagem,
                            header: "Sucesso!",
                            buttons: [
                                {
                                    text: 'Ok',
                                    role: 'cancel',
                                    cssClass: 'secondary'
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EquiparItemService.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _criacoes_criar_item_service__WEBPACK_IMPORTED_MODULE_3__["CriarItemService"] }
    ]; };
    EquiparItemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _criacoes_criar_item_service__WEBPACK_IMPORTED_MODULE_3__["CriarItemService"]])
    ], EquiparItemService);
    return EquiparItemService;
}());



/***/ }),

/***/ "./src/app/services/inventario/inventario.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/inventario/inventario.service.ts ***!
  \***********************************************************/
/*! exports provided: InventarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventarioService", function() { return InventarioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/config/api.config */ "./src/app/config/api.config.ts");




var InventarioService = /** @class */ (function () {
    function InventarioService(http) {
        this.http = http;
    }
    InventarioService.prototype.setTipo = function (tipo) {
        this.tipo = tipo;
    };
    InventarioService.prototype.getTipo = function () {
        return this.tipo;
    };
    InventarioService.prototype.findById = function (id) {
        return this.http.get(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl + "inventario/" + id, {
            responseType: 'json',
            observe: "body"
        });
    };
    InventarioService.prototype.update = function (id, dto) {
        return this.http.put(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl + "inventario/" + id, dto);
    };
    InventarioService.prototype.updateDinheiro = function (id, valor) {
        var p = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('dinheiro', valor);
        return this.http.put(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl + "inventario/dinheiro/" + id, {}, { params: p });
    };
    InventarioService.prototype.findByIdInMesa = function (idInventario, idNpc, tipo, idMesa) {
        if (this.tipo)
            tipo = this.tipo;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('idInventario', idInventario)
            .set('idNpc', idNpc)
            .set('tipo', tipo)
            .set('idMesa', idMesa);
        return this.http.get(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl + "mesa/inventario", {
            responseType: 'json',
            observe: "body",
            params: params
        });
    };
    InventarioService.prototype.updateInMesa = function (dto, idInventario, idNpc, tipo, idMesa) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('idInventario', idInventario)
            .set('idNpc', idNpc)
            .set('tipo', tipo)
            .set('idMesa', idMesa);
        return this.http.put(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl + "mesa/inventario", dto, {
            responseType: 'json',
            observe: "body",
            params: params
        });
    };
    InventarioService.prototype.updateDinheiroInMesa = function (dinheiro, idInventario, idNpc, tipo, idMesa) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('idInventario', idInventario)
            .set('dinheiro', dinheiro)
            .set('idNpc', idNpc)
            .set('tipo', tipo)
            .set('idMesa', idMesa);
        return this.http.put(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl + "mesa/dinheiro", null, {
            responseType: 'json',
            observe: "body",
            params: params
        });
    };
    InventarioService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    InventarioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], InventarioService);
    return InventarioService;
}());



/***/ })

}]);
//# sourceMappingURL=default~contmesa-contmesa-module~explorar-explore-capitulo-explore-capitulo-module~explorar-explore-~8c31e54e-es5.js.map