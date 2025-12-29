export default {
  incarnation: process.env.API_URL + '/incarnation?populate[attributes]=*&populate[stigmas]=*&populate[ctas]=*&populate[contacts]=*&populate[scenarios][populate]=descriptions',
}
