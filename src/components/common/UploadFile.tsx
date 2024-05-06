import { ImageType } from '@interfaces/image'
import { deleteFile } from '@services/upload'
import { Button, Form, Image, Upload, message } from 'antd'
import { UploadIcon, X } from 'lucide-react'
import { useState } from 'react'

interface UploadFileProps {
  name: string
}

const UploadFile = ({ name }: UploadFileProps) => {
  const [productImage, setProductImage] = useState<ImageType | null>()

  const handleDeleteImage = async (public_id: string) => {
    try {
      const response = await deleteFile(public_id)
      message.success(response.data.message)
      setProductImage(null)
      return response
    } catch (error) {
      message.error('Có lỗi xảy ra khi xóa ảnh')
    }
  }

  return (
    <>
      <Form.Item
        label='Hình ảnh'
        name={name}
        getValueFromEvent={(event) => {
          const image = event.fileList[0].response?.data
          setProductImage(image)
          return image
        }}
      >
        <Upload
          action={`${import.meta.env.VITE_BACKEND_API}/file/upload`}
          name='file'
          multiple={true}
        >
          <Button className='flex items-center gap-3'>
            <UploadIcon size={14} />
            Upload file
          </Button>
        </Upload>
        {productImage ? (
          <div className='relative mt-3 w-[300px]'>
            <Image src={productImage.url} width={300} />
            <X
              className='absolute right-[-10px] top-[-10px] cursor-pointer'
              onClick={() => handleDeleteImage(productImage.public_id)}
            />
          </div>
        ) : null}
      </Form.Item>
    </>
  )
}

export default UploadFile
