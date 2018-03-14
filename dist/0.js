webpackJsonp([0],{

/***/ 471:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(20);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = __webpack_require__(118);

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = __webpack_require__(47);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _elementReact = __webpack_require__(129);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navigation = function (_React$Component) {
    (0, _inherits3.default)(Navigation, _React$Component);

    function Navigation(props) {
        (0, _classCallCheck3.default)(this, Navigation);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Navigation.__proto__ || (0, _getPrototypeOf2.default)(Navigation)).call(this, props));

        _this.showDialog = function () {
            _this.setState({
                dialogVisible: true
            });
        };

        _this.closeDialog = function () {
            _this.setState({
                dialogVisible: false,
                addOrEditform: {}
            });
        };

        _this.addOrUpdate = function () {
            console.log(_this.state.addOrEditform);
            _this.closeDialog();
        };

        _this.state = {
            currentId: '',
            dialogVisible: false,
            addOrEditform: {},
            form: {
                user: '',
                region: ''
            },
            columns: [{
                label: "日期",
                prop: "date",
                width: 180
            }, {
                label: "姓名",
                prop: "name",
                width: 180
            }, {
                label: "地址",
                prop: "address"
            }],
            data: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }]
        };
        return _this;
    }

    (0, _createClass3.default)(Navigation, [{
        key: 'onChange',
        value: function onChange(key, value) {
            this.setState({
                addOrEditform: (0, _assign2.default)(this.state.addOrEditform, (0, _defineProperty3.default)({}, key, value))
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'navigation-box' },
                _react2.default.createElement(
                    _elementReact.Form,
                    { inline: true, model: this.state.form, className: 'demo-form-inline' },
                    _react2.default.createElement(
                        _elementReact.Form.Item,
                        null,
                        _react2.default.createElement(_elementReact.Input, { value: this.state.form.user, placeholder: '\u5BA1\u6279\u4EBA', onChange: this.onChange.bind(this, 'user') })
                    ),
                    _react2.default.createElement(
                        _elementReact.Form.Item,
                        null,
                        _react2.default.createElement(
                            _elementReact.Select,
                            { value: this.state.form.region, placeholder: '\u6D3B\u52A8\u533A\u57DF' },
                            _react2.default.createElement(_elementReact.Select.Option, { label: '\u533A\u57DF\u4E00', value: 'shanghai' }),
                            _react2.default.createElement(_elementReact.Select.Option, { label: '\u533A\u57DF\u4E8C', value: 'beijing' })
                        )
                    ),
                    _react2.default.createElement(
                        _elementReact.Form.Item,
                        null,
                        _react2.default.createElement(
                            _elementReact.Button,
                            { nativeType: 'submit', type: 'primary' },
                            '\u67E5\u8BE2'
                        )
                    ),
                    _react2.default.createElement(
                        _elementReact.Form.Item,
                        null,
                        _react2.default.createElement(
                            _elementReact.Button,
                            { type: 'primary', onClick: this.showDialog },
                            '\u65B0\u589E\u5BFC\u822A'
                        )
                    )
                ),
                _react2.default.createElement(_elementReact.Table, {
                    columns: this.state.columns,
                    data: this.state.data,
                    stripe: true
                }),
                _react2.default.createElement(_elementReact.Pagination, { layout: 'total, sizes, prev, pager, next, jumper', total: 400, pageSizes: [100, 200, 300, 400], pageSize: 100, currentPage: 5 }),
                _react2.default.createElement(
                    _elementReact.Dialog,
                    {
                        title: '\u65B0\u589E\u5BFC\u822A',
                        visible: this.state.dialogVisible,
                        onCancel: this.closeDialog
                    },
                    _react2.default.createElement(
                        _elementReact.Dialog.Body,
                        null,
                        _react2.default.createElement(
                            _elementReact.Form,
                            { model: this.state.addOrEditform, labelWidth: 100 },
                            _react2.default.createElement(
                                _elementReact.Form.Item,
                                { label: '\u5BFC\u822A\u540D\u79F0', prop: 'name' },
                                _react2.default.createElement(_elementReact.Input, { value: this.state.addOrEditform.name, onChange: this.onChange.bind(this, 'name'), autoComplete: 'off' })
                            ),
                            _react2.default.createElement(
                                _elementReact.Form.Item,
                                { label: '\u5BFC\u822A\u7EA7\u522B', prop: 'rank' },
                                _react2.default.createElement(
                                    _elementReact.Select,
                                    { value: this.state.addOrEditform.rank, placeholder: '\u8BF7\u9009\u62E9\u5BFC\u822A\u7EA7\u522B', onChange: this.onChange.bind(this, 'rank') },
                                    _react2.default.createElement(_elementReact.Select.Option, { label: '\u4E00\u7EA7\u5BFC\u822A', value: '1' }),
                                    _react2.default.createElement(_elementReact.Select.Option, { label: '\u4E8C\u7EA7\u5BFC\u822A', value: '2' })
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _elementReact.Dialog.Footer,
                        { className: 'dialog-footer' },
                        _react2.default.createElement(
                            _elementReact.Button,
                            { onClick: this.closeDialog },
                            '\u53D6\u6D88'
                        ),
                        _react2.default.createElement(
                            _elementReact.Button,
                            { type: 'primary', onClick: this.addOrUpdate },
                            '\u786E\u5B9A'
                        )
                    )
                )
            );
        }
    }]);
    return Navigation;
}(_react2.default.Component);

exports.default = Navigation;

/***/ })

});