import { Button, Card, Form, Input, Typography } from "antd"

// type LoginFormProps = {
//   onLogin: () => void
// }

type LoginFieldType = {
  email: string;
  password: string;
};

const LoginForm = () => {

  // const onSubmit: FormProps<LoginFieldType>['onFinish'] = async () => {
  //   const message = await onLogin()
  // }

  return (
    <Card className="w-[550px] py-[50px] shadow-sm">
      <Typography.Title level={4} className="text-center">Đăng nhập</Typography.Title>
      <Form
        name="loginForm"
        layout="vertical"
        autoComplete="off"
      >
        <Form.Item<LoginFieldType>
          label="Email"
          name={'email'}
          rules={[{
            required: true,
            message: 'Vui lòng nhập email'
          }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<LoginFieldType>
          label="Mật khẩu"
          name={'password'}
          rules={[{
            required: true,
            message: 'Vui lòng nhập mật khẩu'
          }]}
        >
          <Input />
        </Form.Item>
        <Button type='primary' htmlType="submit" block>Đăng nhập</Button>
      </Form>
    </Card>
  )
}

export default LoginForm