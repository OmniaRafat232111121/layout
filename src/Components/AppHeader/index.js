import { Badge, Image, Space, Typography } from 'antd'
import { BellFilled, MailOutlined } from "@ant-design/icons";
const AppHeader = () => {
  return (
    <div className='AppHeader'>
      <Image 
      width={40}
       src="https://yt3.ggpht.com/ytc/AMLnZu83ghQ28n1SqADR-RbI2BGYTrqqThAtJbfv9jcq=s176-c-k-c0x00ffffff-no-rj"></Image>
   <Typography.Title>Dashboard</Typography.Title>
   <Space>
    <Badge count={10} >
    <MailOutlined style={{fontSize:24}}/>
    </Badge>
    <Badge count={20} >
        <BellFilled style={{fontSize:24}}/>
    </Badge>
    
   </Space>
   
    </div>
  )
}

export default AppHeader
