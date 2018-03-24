import React from 'react'
import {MessageBox, Form, Input, Select, Button, Table, Pagination, Dialog, Message} from 'element-react'
import Server from './server'

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            server: new Server(),
            pageSize: 10,
            currentPage: 1,
            total: 0,
            currentId: '',
            addDialogVisible: false,
            addForm: {},
            editDialogVisible: false,
            editForm: {},
            rules: {
                name: [
                    { required: true, message: '请输入导航名称', trigger: 'blur' }
                ],
                rank: [
                    { required: true, message: '请选择导航级别', trigger: 'change' }
                ]
            },
            selectForm: {},
            data: [],
            columns: [
                {
                    label: "导航名称",
                    prop: "name"
                },
                {
                    label: "导航级别",
                    render: (row, columns, index) => {
                        return (
                            <span>{this.state.ranks[row.rank]}</span>
                        )
                    }
                },
                {
                    label: "操作",
                    render: (row, columns, index) => {
                        return (
                            <div>
                                <Button type="text" onClick={this.update.bind(this, row, index)}>修改</Button>
                                <Button type="text" onClick={this.remove.bind(this, row, index)}>删除</Button>
                            </div>
                        )
                    }
                }
            ],
            ranks: ['全部', '一级导航', '二级导航']
        };
    }
    componentDidMount () {
        this.getList()
    }
    getList = async () => {
        const {data} = await this.state.server.getList({
            name: this.state.selectForm.name,
            rank: this.state.selectForm.rank,
            pageSize: this.state.pageSize,
            currentPage: this.state.currentPage
        })
        this.setState({
            data: data.data,
            total: data.page.total
        })
    }
    remove (row, index) {
        MessageBox.confirm('您确定删除吗？', '提示', {
            type: 'warning'
        }).then(() => {
            this.state.server.remove(row._id)
            Message.success('操作成功')
            this.getList()
        })
    }
    update (row, index) {
        this.setState({
            editForm: Object.assign({}, row),
            currentId: row._id
        })
        this.setState({
            editDialogVisible: true
        })
    }
    onChange(formName, key, value) {
        this.setState({
            [`${formName}Form`]: Object.assign(this.state[`${formName}Form`], { [key]: value })
        });
    }
    showAddDialog = () => {
        this.setState({
            addForm: {},
            addDialogVisible: true
        })
    }
    closeAddDialog = () => {
        this.setState({
            addDialogVisible: false
        })
    }
    closeEditDialog = () => {
        this.setState({
            editDialogVisible: false
        })
    }
    add = () => {
        this.refs.addForm.validate((valid) => {
            if (valid) {
                this.state.server.add(this.state.addForm)
                this.closeAddDialog()
                Message.success('操作成功')
                this.getList()
            }
        });
    }
    edit = () => {
        this.refs.editForm.validate((valid) => {
            if (valid) {
                this.state.server.edit(this.state.currentId, this.state.editForm)
                this.closeEditDialog()
                Message.success('操作成功')
                this.getList()
            }
        });
    }
    onSizeChange = (pageSize) => {
        this.setState({
            currentPage: 1,
            pageSize
        }, this.getList)
    }
    onCurrentChange = (currentPage) => {
        this.setState({
            currentPage
        }, this.getList)
    }
    select = () => {
        this.setState({
            currentPage: 1
        }, this.getList)
    }
    reset = () => {
        this.setState({
            selectForm: {}
        })
    }
    render() {
        return (
            <div className="navigation-box">
                <Form inline={true} model={this.state.selectForm}>
                    <Form.Item>
                        <Input value={this.state.selectForm.name} placeholder="导航名称" onChange={this.onChange.bind(this, 'select', 'name')}></Input>
                    </Form.Item>
                    <Form.Item>
                        <Select value={this.state.selectForm.rank} placeholder="导航级别" onChange={this.onChange.bind(this, 'select', 'rank')}>
                            <Select.Option label={this.state.ranks[0]} value=""></Select.Option>
                            <Select.Option label={this.state.ranks[1]} value="1"></Select.Option>
                            <Select.Option label={this.state.ranks[2]} value="2"></Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" onClick={this.select}>查询</Button>
                        <Button onClick={this.reset}>清空</Button>
                        <Button type="primary" onClick={this.showAddDialog}>新增导航</Button>
                    </Form.Item>
                </Form>
                <Table
                    columns={this.state.columns}
                    data={this.state.data}
                    stripe={true}
                />
                <Pagination
                    layout="total, sizes, prev, pager, next, jumper"
                    total={this.state.total}
                    pageSizes={[10, 20, 30, 40]}
                    pageSize={this.state.pageSize}
                    onSizeChange={this.onSizeChange}
                    onCurrentChange={this.onCurrentChange}
                    currentPage={this.state.currentPage}
                />
                <Dialog
                    title="新增"
                    visible={ this.state.addDialogVisible }
                    onCancel={this.closeAddDialog}
                    size="tiny"
                >
                    <Dialog.Body>
                        <Form ref="addForm" model={this.state.addForm} labelWidth={100} rules={this.state.rules}>
                            <Form.Item label="导航名称" prop="name">
                                <Input value={this.state.addForm.name} onChange={this.onChange.bind(this, 'add', 'name')} autoComplete="off" />
                            </Form.Item>
                            <Form.Item label="导航级别" prop="rank">
                                <Select value={this.state.addForm.rank} placeholder="请选择导航级别" onChange={this.onChange.bind(this, 'add', 'rank')}>
                                    <Select.Option label="一级导航" value="1"></Select.Option>
                                    <Select.Option label="二级导航" value="2"></Select.Option>
                                </Select>
                            </Form.Item>
                        </Form>
                    </Dialog.Body>
                    <Dialog.Footer className="dialog-footer">
                        <Button onClick={this.closeAddDialog}>取消</Button>
                        <Button type="primary" onClick={this.add}>确定</Button>
                    </Dialog.Footer>
                </Dialog>
                <Dialog
                    title="修改"
                    visible={ this.state.editDialogVisible }
                    onCancel={this.closeEditDialog}
                    size="tiny"
                >
                    <Dialog.Body>
                        <Form ref="editForm" model={this.state.editForm} labelWidth={100} rules={this.state.rules}>
                            <Form.Item label="导航名称" prop="name">
                                <Input value={this.state.editForm.name} onChange={this.onChange.bind(this, 'edit', 'name')} autoComplete="off" />
                            </Form.Item>
                            <Form.Item label="导航级别" prop="rank">
                                <Select value={this.state.editForm.rank} placeholder="请选择导航级别" onChange={this.onChange.bind(this, 'edit', 'rank')}>
                                    <Select.Option label="一级导航" value="1"></Select.Option>
                                    <Select.Option label="二级导航" value="2"></Select.Option>
                                </Select>
                            </Form.Item>
                        </Form>
                    </Dialog.Body>
                    <Dialog.Footer className="dialog-footer">
                        <Button onClick={this.closeEditDialog}>取消</Button>
                        <Button type="primary" onClick={this.edit}>确定</Button>
                    </Dialog.Footer>
                </Dialog>
            </div>
        )
    }
}