import React from 'react'
import {Form, Input, Select, Button, Table, Pagination, Dialog} from 'element-react'

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dialogVisible: false,
            addOrEditform: {},
            form: {
                user: '',
                region: ''
            },
            columns: [
                {
                    label: "日期",
                    prop: "date",
                    width: 180
                },
                {
                    label: "姓名",
                    prop: "name",
                    width: 180
                },
                {
                    label: "地址",
                    prop: "address"
                }
            ],
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
    }
    onSubmit(e) {
        e.preventDefault();
        console.log('submit!');
    }
    onChange(key, value) {
        this.setState({
            form: Object.assign(this.state.form, { [key]: value })
        });
    }
    showDialog = () => {
        this.setState({
            dialogVisible: true
        })
    }
    closeDialog = () => {
        this.setState({
            dialogVisible: false,
            addOrEditform: {}
        })
    }
    render() {
        return (
            <div className="navigation-box">
                <Form inline={true} model={this.state.form} onSubmit={this.onSubmit.bind(this)} className="demo-form-inline">
                    <Form.Item>
                        <Input value={this.state.form.user} placeholder="审批人" onChange={this.onChange.bind(this, 'user')}></Input>
                    </Form.Item>
                    <Form.Item>
                        <Select value={this.state.form.region} placeholder="活动区域">
                            <Select.Option label="区域一" value="shanghai"></Select.Option>
                            <Select.Option label="区域二" value="beijing"></Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <Button nativeType="submit" type="primary">查询</Button>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" onClick={this.showDialog}>新增导航</Button>
                    </Form.Item>
                </Form>
                <Table
                    columns={this.state.columns}
                    data={this.state.data}
                    stripe={true}
                />
                <Pagination layout="total, sizes, prev, pager, next, jumper" total={400} pageSizes={[100, 200, 300, 400]} pageSize={100} currentPage={5}/>
                <Dialog
                    title="新增导航"
                    visible={ this.state.dialogVisible }
                    onCancel={this.closeDialog}
                >
                    <Dialog.Body>
                        <Form model={this.state.addOrEditform} labelWidth={100}>
                            <Form.Item label="导航名称" prop="name">
                                <Input value={this.state.addOrEditform.name} onChange={this.onChange.bind(this, 'name')} autoComplete="off" />
                            </Form.Item>
                            <Form.Item label="导航级别" prop="rank">
                                <Select value={this.state.addOrEditform.rank} placeholder="请选择导航级别" onChange={this.onChange.bind(this, 'rank')}>
                                    <Select.Option label="一级导航" value="1"></Select.Option>
                                    <Select.Option label="二级导航" value="2"></Select.Option>
                                </Select>
                            </Form.Item>
                        </Form>
                    </Dialog.Body>
                    <Dialog.Footer className="dialog-footer">
                        <Button onClick={this.closeDialog}>取消</Button>
                        <Button type="primary" onClick={ () => this.setState({ dialogVisible: false }) }>确定</Button>
                    </Dialog.Footer>
                </Dialog>
            </div>
        )
    }
}