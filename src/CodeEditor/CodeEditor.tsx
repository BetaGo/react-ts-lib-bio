import React, { Component } from 'react';
import { Card } from 'antd';
import MonacoEditor from 'react-monaco-editor';

class CodeEditor extends Component {
    render() {
        return (
            <Card title="代码编辑器">
                <MonacoEditor
                    height="600"
                    language="javascript"
                />
            </Card>
        );
    }
}

export default CodeEditor;