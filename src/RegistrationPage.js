import React, { Component } from 'react'
import { graphql, commitMutation, createRefetchContainer } from 'react-relay'

import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from 'antd'

import 'antd/dist/antd.css' //todo: configure babel autoimport

const { Option } = Select
const AutoCompleteOption = AutoComplete.Option

const hospitals = [
  {
    value: 'Australia',
    label: 'Australia',
    children: [
      {
        value: 'Australian Capital Territory',
        label: 'Australian Capital Territory',
        children: [
          {
            value: 'Calvary Hospital',
            label: 'Calvary Hospital',
          },
          {
            value: 'Canberra hospital',
            label: 'Canberra hospital',
          },
        ],
      },
      {
        value: 'New South Wales',
        label: 'New South Wales',
        children: [
          {
            value: 'Armidale Rural Referral Hospital',
            label: 'Armidale Rural Referral Hospital',
          },
          {
            value: 'Auburn District Hospital',
            label: 'Auburn District Hospital',
          },
          {
            value: 'Balmain Hospital',
            label: 'Balmain Hospital',
          },
          {
            value: 'Bankstown Lidcombe Hospital',
            label: 'Bankstown Lidcombe Hospital',
          },
          {
            value: 'Bathurst Base Hospital',
            label: 'Bathurst Base Hospital',
          },
          {
            value: 'Belmont Hospital',
            label: 'Belmont Hospital',
          },
          {
            value: 'Blacktown Mt Druitt Hospital',
            label: 'Blacktown Mt Druitt Hospital',
          },
          {
            value: 'Blue Mountains District Anzac Memorial Hospital',
            label: 'Blue Mountains District Anzac Memorial Hospital',
          },
          {
            value: 'Bowral District Hospital',
            label: 'Bowral District Hospital',
          },
          {
            value: 'Braeside Hospital - Rehabilitation Unit',
            label: 'Braeside Hospital - Rehabilitation Unit',
          },
          {
            value: 'Broken Hill Base Hospital',
            label: 'Broken Hill Base Hospital',
          },
          {
            value: 'Bulli Hospital',
            label: 'Bulli Hospital',
          },
          {
            value: 'Calvary Health Care Sydney (Calvary Hospital)',
            label: 'Calvary Health Care Sydney (Calvary Hospital)',
          },
          {
            value: 'Calvary Mater Newcastle',
            label: 'Calvary Mater Newcastle',
          },
          {
            value: 'Campbelltown Hospital',
            label: 'Campbelltown Hospital',
          },
          {
            value: 'Canterbury Hospital',
            label: 'Canterbury Hospital',
          },
          {
            value: 'Coffs Harbour Health Campus',
            label: 'Coffs Harbour Health Campus',
          },
          {
            value: 'Concord Repatriation General Hospital',
            label: 'Concord Repatriation General Hospital',
          },
          {
            value: 'Development Assessment Service (St George Hospital)',
            label: 'Development Assessment Service (St George Hospital)',
          },
          {
            value: 'Dubbo Base Hospital',
            label: 'Dubbo Base Hospital',
          },
          {
            value: 'Fairfield Hospital',
            label: 'Fairfield Hospital',
          },
          {
            value: 'Forensic Hospital',
            label: 'Forensic Hospital',
          },
          {
            value: 'Gosford Hospital',
            label: 'Gosford Hospital',
          },
          {
            value: 'Goulburn Base Hospital',
            label: 'Goulburn Base Hospital',
          },
          {
            value: 'Greenwich Hospital',
            label: 'Greenwich Hospital',
          },
          {
            value: 'Griffith Hospital',
            label: 'Griffith Hospital',
          },
          {
            value: 'Hornsby Ku-ring-gai Hospital',
            label: 'Hornsby Ku-ring-gai Hospital',
          },
          {
            value: 'John Hunter Hospital',
            label: 'John Hunter Hospital',
          },
          {
            value: 'Lismore Base Hospital',
            label: 'Lismore Base Hospital',
          },
          {
            value: 'Liverpool Hospital',
            label: 'Liverpool Hospital',
          },
          {
            value: 'Maitland Hospital',
            label: 'Maitland Hospital',
          },
          {
            value: 'Manning Rural Referral Hospital',
            label: 'Manning Rural Referral Hospital',
          },
          {
            value: 'Nepean Hospital',
            label: 'Nepean Hospital',
          },
          {
            value: 'North Shore Private Hospital',
            label: 'North Shore Private Hospital',
          },
          {
            value: 'Northern Beaches Hospital',
            label: 'Northern Beaches Hospital',
          },
          {
            value: 'Orange Health Service',
            label: 'Orange Health Service',
          },
          {
            value: 'Port Kembla Hospital',
            label: 'Port Kembla Hospital',
          },
          {
            value: 'Port Macquarie Base Hospital',
            label: 'Port Macquarie Base Hospital',
          },
          {
            value: 'Prince of Wales Hospital',
            label: 'Prince of Wales Hospital',
          },
          {
            value: 'Royal Hospital for Women',
            label: 'Royal Hospital for Women',
          },
          {
            value: 'Royal North Shore Hospital',
            label: 'Royal North Shore Hospital',
          },
          {
            value: 'Royal Prince Alfred Hospital',
            label: 'Royal Prince Alfred Hospital',
          },
          {
            value: 'Ryde Hospital',
            label: 'Ryde Hospital',
          },
          {
            value: 'Shellharbour Hospital',
            label: 'Shellharbour Hospital',
          },
          {
            value: 'Shoalhaven District Memorial Hospital',
            label: 'Shoalhaven District Memorial Hospital',
          },
          {
            value: 'South East Regional Hospital',
            label: 'South East Regional Hospital',
          },
          {
            value: 'St George Hospital',
            label: 'St George Hospital',
          },
          {
            value: "St Joseph's Hospital",
            label: "St Joseph's Hospital",
          },
          {
            value: "St Vincent's Hospital",
            label: "St Vincent's Hospital",
          },
          {
            value: 'Sutherland Hospital',
            label: 'Sutherland Hospital',
          },
          {
            value: "Sydney Children's Hospital",
            label: "Sydney Children's Hospital",
          },
          {
            value: 'Sydney Hospital',
            label: 'Sydney Hospital',
          },
          {
            value: 'Tamworth Rural Referral Hospital',
            label: 'Tamworth Rural Referral Hospital',
          },
          {
            value: 'Tweed Heads District Hospital',
            label: 'Tweed Heads District Hospital',
          },
          {
            value: 'Wagga Wagga Rural Referal Hospital',
            label: 'Wagga Wagga Rural Referal Hospital',
          },
          {
            value: 'War Memorial Hospital',
            label: 'War Memorial Hospital',
          },
          {
            value: 'Westmead Hospital',
            label: 'Westmead Hospital',
          },
          {
            value: 'Wollongong Hospital',
            label: 'Wollongong Hospital',
          },
          {
            value: 'Wyong Hospital',
            label: 'Wyong Hospital',
          },
        ],
      },
      {
        value: 'Northern Territory',
        label: 'Northern Territory',
        children: [
          {
            value: 'Alice Springs Hospital',
            label: 'Alice Springs Hospital',
          },
          {
            value: 'Darwin Private Hospital',
            label: 'Darwin Private Hospital',
          },
          {
            value: 'Katherine Hospital',
            label: 'Katherine Hospital',
          },
          {
            value: 'Palmerston Regional Hospital',
            label: 'Palmerston Regional Hospital',
          },
          {
            value: 'Royal Darwin Hospital',
            label: 'Royal Darwin Hospital',
          },
        ],
      },
      {
        value: 'Queensland',
        label: 'Queensland',
        children: [
          {
            value: 'Atherton District Hospital',
            label: 'Atherton District Hospital',
          },
          {
            value: 'Bundaberg Hospital',
            label: 'Bundaberg Hospital',
          },
          {
            value: 'Caboolture Hospital',
            label: 'Caboolture Hospital',
          },
          {
            value: 'Cairns Hospital',
            label: 'Cairns Hospital',
          },
          {
            value: 'Cairns Private Hospital',
            label: 'Cairns Private Hospital',
          },
          {
            value: 'Friendly Society Private Hospital',
            label: 'Friendly Society Private Hospital',
          },
          {
            value: 'Gladstone Hospital',
            label: 'Gladstone Hospital',
          },
          {
            value: 'Gold Coast University Hospital',
            label: 'Gold Coast University Hospital',
          },
          {
            value: 'Greenslopes Private Hospital',
            label: 'Greenslopes Private Hospital',
          },
          {
            value: 'Gympie Hospital',
            label: 'Gympie Hospital',
          },
          {
            value: 'Hervey Bay Hospital',
            label: 'Hervey Bay Hospital',
          },
          {
            value: 'Innisfail Hospital',
            label: 'Innisfail Hospital',
          },
          {
            value: 'Ipswich Hospital',
            label: 'Ipswich Hospital',
          },
          {
            value: 'Kingaroy Hospital',
            label: 'Kingaroy Hospital',
          },
          {
            value: 'Logan Hospital',
            label: 'Logan Hospital',
          },
          {
            value: 'Mackay Base Hospital',
            label: 'Mackay Base Hospital',
          },
          {
            value: 'Mater Hospital, Brisbane',
            label: 'Mater Hospital, Brisbane',
          },
          {
            value: 'Mt Isa Base Hospital',
            label: 'Mt Isa Base Hospital',
          },
          {
            value: 'Nambour General Hospital',
            label: 'Nambour General Hospital',
          },
          {
            value: 'Noosa Hospital',
            label: 'Noosa Hospital',
          },
          {
            value: 'Princess Alexandra Hospital',
            label: 'Princess Alexandra Hospital',
          },
          {
            value: 'Queen Elizabeth II Jubilee Hospital',
            label: 'Queen Elizabeth II Jubilee Hospital',
          },
          {
            value: 'Redcliffe Hospital',
            label: 'Redcliffe Hospital',
          },
          {
            value: 'Redland Hospital',
            label: 'Redland Hospital',
          },
          {
            value: 'Robina Hospital',
            label: 'Robina Hospital',
          },
          {
            value: 'Rockhampton Base Hospital',
            label: 'Rockhampton Base Hospital',
          },
          {
            value: "Royal Brisbane and Women's Hospital",
            label: "Royal Brisbane and Women's Hospital",
          },
          {
            value: 'Sunshine Coast District Hospital (Caloundra Hospital)',
            label: 'Sunshine Coast District Hospital (Caloundra Hospital)',
          },
          {
            value: 'Sunshine Coast University Hospital',
            label: 'Sunshine Coast University Hospital',
          },
          {
            value: 'Sunshine Coast University Private Hospital',
            label: 'Sunshine Coast University Private Hospital',
          },
          {
            value: 'The Prince Charles Hospital',
            label: 'The Prince Charles Hospital',
          },
          {
            value: 'The Townsville Hospital',
            label: 'The Townsville Hospital',
          },
          {
            value: 'Toowoomba Base Hospital',
            label: 'Toowoomba Base Hospital',
          },
        ],
      },
      {
        value: 'South Australia',
        label: 'South Australia',
        children: [
          {
            value: 'Drug and Alcohol Services South Australia',
            label: 'Drug and Alcohol Services South Australia',
          },
          {
            value: 'Flinders Medical Centre',
            label: 'Flinders Medical Centre',
          },
          {
            value: 'Flinders Private Hospital',
            label: 'Flinders Private Hospital',
          },
          {
            value: 'Hampstead Rehabilitation Hospital',
            label: 'Hampstead Rehabilitation Hospital',
          },
          {
            value: 'Lyell McEwin Health Service',
            label: 'Lyell McEwin Health Service',
          },
          {
            value: 'Modbury Hospital',
            label: 'Modbury Hospital',
          },
          {
            value: 'Mount Gambier Hospital',
            label: 'Mount Gambier Hospital',
          },
          {
            value: 'New Royal Adelaide Hospital',
            label: 'New Royal Adelaide Hospital',
          },
          {
            value: 'Noarlunga Hospital',
            label: 'Noarlunga Hospital',
          },
          {
            value: 'Queen Elizabeth Hospital',
            label: 'Queen Elizabeth Hospital',
          },
          {
            value: 'Whyalla Hospital',
            label: 'Whyalla Hospital',
          },
        ],
      },
      {
        value: 'Tasmania',
        label: 'Tasmania',
        children: [
          {
            value: 'Calvary Health Care (Lenah Valley Campus)',
            label: 'Calvary Health Care (Lenah Valley Campus)',
          },
          {
            value: "Calvary Health Care (St Luke's Campus)",
            label: "Calvary Health Care (St Luke's Campus)",
          },
          {
            value: 'Launceston General Hospital',
            label: 'Launceston General Hospital',
          },
          {
            value: 'North West Regional Hospital - Burnie',
            label: 'North West Regional Hospital - Burnie',
          },
          {
            value: 'Royal Hobart Hospital',
            label: 'Royal Hobart Hospital',
          },
        ],
      },
      {
        value: 'Victoria',
        label: 'Victoria',
        children: [
          {
            value: 'Albury Wodonga Health',
            label: 'Albury Wodonga Health',
          },
          {
            value: 'Alfred Hospital',
            label: 'Alfred Hospital',
          },
          {
            value: 'Austin Health',
            label: 'Austin Health',
          },
          {
            value: 'Ballarat Hospital',
            label: 'Ballarat Hospital',
          },
          {
            value: 'Bendigo Hospital',
            label: 'Bendigo Hospital',
          },
          {
            value: 'Box Hill Hospital',
            label: 'Box Hill Hospital',
          },
          {
            value: 'Broadmeadows Health Service',
            label: 'Broadmeadows Health Service',
          },
          {
            value: 'Bundoora Extended Care Centre',
            label: 'Bundoora Extended Care Centre',
          },
          {
            value: 'Calvary Health Care Bethlehem',
            label: 'Calvary Health Care Bethlehem',
          },
          {
            value: 'Casey Hospital',
            label: 'Casey Hospital',
          },
          {
            value: 'Caulfield Hospital',
            label: 'Caulfield Hospital',
          },
          {
            value: 'Central Gippsland Health Service (Sale)',
            label: 'Central Gippsland Health Service (Sale)',
          },
          {
            value: 'Craigieburn Health Service',
            label: 'Craigieburn Health Service',
          },
          {
            value: 'Dandenong Hospital',
            label: 'Dandenong Hospital',
          },
          {
            value: 'Epworth Eastern Hospital',
            label: 'Epworth Eastern Hospital',
          },
          {
            value: 'Epworth Freemasons Hospital',
            label: 'Epworth Freemasons Hospital',
          },
          {
            value: 'Footscray Hospital',
            label: 'Footscray Hospital',
          },
          {
            value: 'Frankston Hospital',
            label: 'Frankston Hospital',
          },
          {
            value: 'Golf Links Road Rehabilitation Centre',
            label: 'Golf Links Road Rehabilitation Centre',
          },
          {
            value: 'Goulburn Valley Health',
            label: 'Goulburn Valley Health',
          },
          {
            value: 'Hamilton Base Hospital',
            label: 'Hamilton Base Hospital',
          },
          {
            value: 'Kingston Centre',
            label: 'Kingston Centre',
          },
          {
            value: 'Latrobe Regional Hospital',
            label: 'Latrobe Regional Hospital',
          },
          {
            value: 'Maroondah Hospital',
            label: 'Maroondah Hospital',
          },
          {
            value: 'McKellar Centre (Barwon Health)',
            label: 'McKellar Centre (Barwon Health)',
          },
          {
            value: 'Mercy Hospital for Women',
            label: 'Mercy Hospital for Women',
          },
          {
            value: 'Mildura Base Hospital',
            label: 'Mildura Base Hospital',
          },
          {
            value: 'Monash Medical Centre',
            label: 'Monash Medical Centre',
          },
          {
            value: 'Moorabbin Hospital',
            label: 'Moorabbin Hospital',
          },
          {
            value: 'Northeast Health Wangaratta',
            label: 'Northeast Health Wangaratta',
          },
          {
            value: 'Peter James Centre',
            label: 'Peter James Centre',
          },
          {
            value: 'Peter MacCallum Cancer Centre',
            label: 'Peter MacCallum Cancer Centre',
          },
          {
            value: 'Rosebud Hospital',
            label: 'Rosebud Hospital',
          },
          {
            value: 'Royal Melbourne Hospital',
            label: 'Royal Melbourne Hospital',
          },
          {
            value: 'Sandringham Hospital',
            label: 'Sandringham Hospital',
          },
          {
            value: "St Vincent's Hospital",
            label: "St Vincent's Hospital",
          },
          {
            value: 'Sunshine Hospital',
            label: 'Sunshine Hospital',
          },
          {
            value: 'The Angliss Hospital',
            label: 'The Angliss Hospital',
          },
          {
            value: 'The Mornington Centre',
            label: 'The Mornington Centre',
          },
          {
            value: 'The Northern Hospital',
            label: 'The Northern Hospital',
          },
          {
            value: 'University Hospital Geelong (Geelong Hospital)',
            label: 'University Hospital Geelong (Geelong Hospital)',
          },
          {
            value: 'Wantirna Health',
            label: 'Wantirna Health',
          },
          {
            value: 'Warrnambool & District Hospital',
            label: 'Warrnambool & District Hospital',
          },
          {
            value: 'Werribee Mercy Hospital',
            label: 'Werribee Mercy Hospital',
          },
          {
            value: 'West Gippsland Hospital',
            label: 'West Gippsland Hospital',
          },
          {
            value: 'Williamstown Hospital',
            label: 'Williamstown Hospital',
          },
          {
            value: 'Wimmera Base Hospital',
            label: 'Wimmera Base Hospital',
          },
        ],
      },
      {
        value: 'Western Australia',
        label: 'Western Australia',
        children: [
          {
            value: 'Albany Regional Hospital',
            label: 'Albany Regional Hospital',
          },
          {
            value: 'Armadale - Kelmscott Health Service',
            label: 'Armadale - Kelmscott Health Service',
          },
          {
            value: 'Bentley Hospital',
            label: 'Bentley Hospital',
          },
          {
            value: 'Bethesda Hospital',
            label: 'Bethesda Hospital',
          },
          {
            value: 'Broome Health Service',
            label: 'Broome Health Service',
          },
          {
            value: 'Fiona Stanley Hospital',
            label: 'Fiona Stanley Hospital',
          },
          {
            value: 'Fremantle Hospital',
            label: 'Fremantle Hospital',
          },
          {
            value: 'Geraldton Regional Hospital',
            label: 'Geraldton Regional Hospital',
          },
          {
            value: 'Hollywood Private Hospital',
            label: 'Hollywood Private Hospital',
          },
          {
            value: 'Joondalup Hospital & Health Campus',
            label: 'Joondalup Hospital & Health Campus',
          },
          {
            value: 'Kalamunda Hospital',
            label: 'Kalamunda Hospital',
          },
          {
            value: 'Kalgoorlie Regional Hospital',
            label: 'Kalgoorlie Regional Hospital',
          },
          {
            value: 'Osborne Park Hospital',
            label: 'Osborne Park Hospital',
          },
          {
            value: 'Peel Health Campus',
            label: 'Peel Health Campus',
          },
          {
            value: 'Rockingham General Hospital',
            label: 'Rockingham General Hospital',
          },
          {
            value: 'Royal Perth Hospital',
            label: 'Royal Perth Hospital',
          },
          {
            value: 'Sir Charles Gairdner Hospital',
            label: 'Sir Charles Gairdner Hospital',
          },
          {
            value: 'South West Health Campus (Bunbury Hospital)',
            label: 'South West Health Campus (Bunbury Hospital)',
          },
          {
            value: 'St John of God Hospital, Bunbury',
            label: 'St John of God Hospital, Bunbury',
          },
          {
            value: 'St John of God Hospital, Mt Lawley',
            label: 'St John of God Hospital, Mt Lawley',
          },
          {
            value: 'St John of God Hospital, Subiaco',
            label: 'St John of God Hospital, Subiaco',
          },
          {
            value: 'St John of God Midland Public & Private Hospital',
            label: 'St John of God Midland Public & Private Hospital',
          },
          {
            value: 'St John of God Murdoch Hospital',
            label: 'St John of God Murdoch Hospital',
          },
          {
            value: 'The Mount Hospital',
            label: 'The Mount Hospital',
          },
        ],
      },
    ],
  },
  {
    value: 'New Zealand',
    label: 'New Zealand',
    children: [
      {
        value: 'Auckland City Hospital',
        label: 'Auckland City Hospital',
      },
      {
        value: 'Middlemore Hospital',
        label: 'Middlemore Hospital',
      },
      {
        value: 'North Shore Hospital',
        label: 'North Shore Hospital',
      },
      {
        value: 'Waitakere Hospital',
        label: 'Waitakere Hospital',
      },
      {
        value: 'Rotorua Hospital',
        label: 'Rotorua Hospital',
      },
      {
        value: 'Tauranga Hospital',
        label: 'Tauranga Hospital',
      },
      {
        value: 'Whakatane Hospital',
        label: 'Whakatane Hospital',
      },
      {
        value: 'Burwood Hospital',
        label: 'Burwood Hospital',
      },
      {
        value: 'Christchurch Hospital',
        label: 'Christchurch Hospital',
      },
      {
        value: 'Timaru Hospital',
        label: 'Timaru Hospital',
      },
      {
        value: 'Gisborne Hospital',
        label: 'Gisborne Hospital',
      },
      {
        value: "Hawke's Bay Hospital",
        label: "Hawke's Bay Hospital",
      },
      {
        value: 'Palmerston North Hospital',
        label: 'Palmerston North Hospital',
      },
      {
        value: 'Wairau Hospital',
        label: 'Wairau Hospital',
      },
      {
        value: 'Nelson Hospital',
        label: 'Nelson Hospital',
      },
      {
        value: 'Whangarei Hospital',
        label: 'Whangarei Hospital',
      },
      {
        value: 'Dunedin Hospital',
        label: 'Dunedin Hospital',
      },
      {
        value: 'Southland Hospital',
        label: 'Southland Hospital',
      },
      {
        value: 'Taranaki Base Hospital',
        label: 'Taranaki Base Hospital',
      },
      {
        value: 'Waikato Hospital',
        label: 'Waikato Hospital',
      },
      {
        value: 'Hutt Hospital',
        label: 'Hutt Hospital',
      },
      {
        value: 'Kenepuru Hospital',
        label: 'Kenepuru Hospital',
      },
      {
        value: 'Masterton Hospital',
        label: 'Masterton Hospital',
      },
      {
        value: 'Wellington Hospital',
        label: 'Wellington Hospital',
      },
    ],
  },
]

class RegistrationPage extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  handleConfirmBlur = e => {
    const value = e.target.value
    this.setState({ confirmDirty: this.state.confirmDirty || !!value })
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!')
    } else {
      callback()
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true })
    }
    callback()
  }

  handleWebsiteChange = value => {
    let autoCompleteResult
    if (!value) {
      autoCompleteResult = []
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(
        domain => `${value}${domain}`
      )
    }
    this.setState({ autoCompleteResult })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const { autoCompleteResult } = this.state

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    }
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    }
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '61',
    })(
      <Select style={{ width: 70 }}>
        <Option value="61">+61</Option>
        <Option value="64">+64</Option>
      </Select>
    )

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ))
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item {...formItemLayout} label="E-mail">
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail',
              },
              {
                required: true,
                message: 'Please input your E-mail',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="First Name">
          {getFieldDecorator('First Name', {
            rules: [
              {
                required: true,
                message: 'Please input your first name',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="Last Name">
          {getFieldDecorator('Last Name', {
            rules: [
              {
                required: true,
                message: 'Please input your last name',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="Password">
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Please input your password',
              },
              {
                validator: this.validateToNextPassword,
              },
            ],
          })(<Input type="password" />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="Confirm Password">
          {getFieldDecorator('confirm', {
            rules: [
              {
                required: true,
                message: 'Please confirm your password',
              },
              {
                validator: this.compareToFirstPassword,
              },
            ],
          })(<Input type="password" onBlur={this.handleConfirmBlur} />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="Hospital">
          {getFieldDecorator('hospital', {
            initialValue: [null],
            rules: [
              {
                type: 'array',
                required: true,
                message: 'Please select your hospital',
              },
            ],
          })(<Cascader options={hospitals} />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="Phone Number">
          {getFieldDecorator('phone', {
            rules: [
              { required: true, message: 'Please input your phone number' },
            ],
          })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
          })(
            <Checkbox>
              I have read the <a href="">agreement</a>
            </Checkbox>
          )}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    )
  }
}

export default createRefetchContainer(
  Form.create({ name: 'register' })(RegistrationPage),
  {
    viewer: graphql`
      fragment RegistrationPage_viewer on Viewer {
        id
        user {
          id
          firstName
          lastName
        }
      }
    `,
  }
)
