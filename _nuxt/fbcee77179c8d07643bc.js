(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{253:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n(192),o=n(38);r.a.use(c.a),r.a.directive("tooltip",c.a);var l={computed:Object(o.b)({}),layout:"template",data:function(){return{bookingTab:"One Way"}},methods:{tabName:function(t){this.bookingTab=t},getBooking:function(t,e){console.log("Iam "+t+" in "+e);var n={id:t,trip:e};""==n.id&&null==n.id||this.$store.commit("flight/bookings/add",{booking:n})},cancelBooking:function(t){console.log("Iam "+t);var e={id:t};""==e.id&&null==e.id||this.$store.commit("flight/bookings/cancel",{cbooking:e})}}},_=n(2),component=Object(_.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-main__inner"},[t._m(0),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"mb-3 card"},[n("div",{staticClass:"card-header"},[n("i",{staticClass:"header-icon lnr-license icon-gradient bg-plum-plate"}),t._v("Agent Flight Bookings ( "+t._s(t.bookingTab)+" )\n                    "),n("div",{staticClass:"btn-actions-pane-right"},[n("div",{staticClass:"btn-group-sm nav btn-group",attrs:{role:"group"}},[n("a",{staticClass:"btn-shadow active btn btn-primary",attrs:{"data-toggle":"tab",href:"#tab-eg1-0"},on:{click:function(e){return t.tabName("One Way")}}},[t._v("One Way")]),t._v(" "),n("a",{staticClass:"btn-shadow  btn btn-primary",attrs:{"data-toggle":"tab",href:"#tab-eg1-1"},on:{click:function(e){return t.tabName("Round Trip")}}},[t._v("Round Trip")])])])]),t._v(" "),n("div",{staticClass:"card-body"},[n("div",{staticClass:"tab-content"},[n("div",{staticClass:"tab-pane active",attrs:{id:"tab-eg1-0",role:"tabpanel"}},[n("div",{staticClass:"table-responsive"},[n("table",{staticClass:"mb-0 table table-bordered"},[t._m(1),t._v(" "),n("tbody",[n("tr",[n("th",{attrs:{scope:"row"}},[t._v("1")]),t._v(" "),n("th",[t._v("XXXXXX")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),n("td",[t._v("1")]),t._v(" "),n("td",[t._v("Agent1")]),t._v(" "),n("td",[n("button",{staticClass:"btn btn-warning mini-btn",attrs:{"data-toggle":"modal","data-target":"#rescheduleModal"},on:{click:function(e){return t.getBooking(1,"one")}}},[t._v("Rescheduled")]),t._v(" "),n("button",{staticClass:"btn btn-danger mini-btn",attrs:{"data-toggle":"modal","data-target":"#cancelBookingModal"},on:{click:function(e){return t.cancelBooking(1)}}},[t._v("Cancelled")])])]),t._v(" "),n("tr",[n("th",{attrs:{scope:"row"}},[t._v("2")]),t._v(" "),n("th",[t._v("XXXXXX")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),n("td",[t._v("1")]),t._v(" "),n("td",[t._v("Agent1")]),t._v(" "),n("td",[n("button",{staticClass:"btn btn-warning mini-btn",attrs:{"data-toggle":"modal","data-target":"#rescheduleModal"},on:{click:function(e){return t.getBooking(2,"one")}}},[t._v("Rescheduled")]),t._v(" "),n("button",{staticClass:"btn btn-danger mini-btn",attrs:{"data-toggle":"modal","data-target":"#cancelBookingModal"},on:{click:function(e){return t.cancelBooking(2)}}},[t._v("Cancelled")])])]),t._v(" "),n("tr",[n("th",{attrs:{scope:"row"}},[t._v("3")]),t._v(" "),n("th",[t._v("XXXXXX")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),n("td",[n("p",{staticClass:"currency"},[t._v("USD")]),t._v("3277\n                                        "),n("p",[n("a",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Fare: ",expression:"'Fare: '"}]},[t._v("View details "),n("i",{staticClass:"pe-7s-info"})])])]),t._v(" "),n("td",[t._v("1")]),t._v(" "),n("td",[t._v("Agent1")]),t._v(" "),n("td",[n("button",{staticClass:"btn btn-warning mini-btn",attrs:{"data-toggle":"modal","data-target":"#rescheduleModal"},on:{click:function(e){return t.getBooking(3,"one")}}},[t._v("Rescheduled")]),t._v(" "),n("button",{staticClass:"btn btn-danger mini-btn",attrs:{"data-toggle":"modal","data-target":"#cancelBookingModal"},on:{click:function(e){return t.cancelBooking(3)}}},[t._v("Cancelled")])])])])])])]),t._v(" "),n("div",{staticClass:"tab-pane",attrs:{id:"tab-eg1-1",role:"tabpanel"}},[n("div",{staticClass:"table-responsive"},[n("table",{staticClass:"mb-0 table table-bordered"},[t._m(10),t._v(" "),n("tbody",[n("tr",[n("th",{attrs:{scope:"row"}},[t._v("1")]),t._v(" "),n("th",[t._v("XXXXXX")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),n("td",[t._v("1")]),t._v(" "),n("td",[t._v("Agent1")]),t._v(" "),n("td",[n("button",{staticClass:"btn btn-warning mini-btn",attrs:{"data-toggle":"modal","data-target":"#rescheduleModal"},on:{click:function(e){return t.getBooking(1,"round")}}},[t._v("Rescheduled")]),t._v(" "),n("button",{staticClass:"btn btn-danger mini-btn",attrs:{"data-toggle":"modal","data-target":"#cancelBookingModal"},on:{click:function(e){return t.cancelBooking(1)}}},[t._v("Cancelled")])])]),t._v(" "),n("tr",[n("th",{attrs:{scope:"row"}},[t._v("2")]),t._v(" "),n("th",[t._v("XXXXXX")]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),n("td",[t._v("1")]),t._v(" "),n("td",[t._v("Agent1")]),t._v(" "),n("td",[n("button",{staticClass:"btn btn-warning mini-btn",attrs:{"data-toggle":"modal","data-target":"#rescheduleModal"},on:{click:function(e){return t.getBooking(2,"round")}}},[t._v("Rescheduled")]),t._v(" "),n("button",{staticClass:"btn btn-danger mini-btn",attrs:{"data-toggle":"modal","data-target":"#cancelBookingModal"},on:{click:function(e){return t.cancelBooking(2)}}},[t._v("Cancelled")])])]),t._v(" "),n("tr",[n("th",{attrs:{scope:"row"}},[t._v("3")]),t._v(" "),n("th",[t._v("XXXXXX")]),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),n("td",[n("p",{staticClass:"currency"},[t._v("USD")]),t._v("3277\n                                        "),n("p",[n("a",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Fare: ",expression:"'Fare: '"}]},[t._v("View details "),n("i",{staticClass:"pe-7s-info"})])])]),t._v(" "),n("td",[t._v("1")]),t._v(" "),n("td",[t._v("Agent1")]),t._v(" "),n("td",[n("button",{staticClass:"btn btn-warning mini-btn",attrs:{"data-toggle":"modal","data-target":"#rescheduleModal"},on:{click:function(e){return t.getBooking(3,"round")}}},[t._v("Rescheduled")]),t._v(" "),n("button",{staticClass:"btn btn-danger mini-btn",attrs:{"data-toggle":"modal","data-target":"#cancelBookingModal"},on:{click:function(e){return t.cancelBooking(3)}}},[t._v("Cancelled")])])])])])])])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"app-page-title"},[e("div",{staticClass:"page-title-wrapper"},[e("div",{staticClass:"page-title-heading"},[e("div",{staticClass:"page-title-icon"},[e("i",{staticClass:"pe-7s-plane icon-gradient bg-happy-itmeo"})]),this._v(" "),e("div",[this._v("Flight Bookings\n                    "),e("div",{staticClass:"page-title-subheading"},[this._v("Agent Flight Booking with One Way & Round Trip.\n                    ")])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("Booking ID")]),t._v(" "),n("th",[t._v("PNR")]),t._v(" "),n("th",[t._v("Departure")]),t._v(" "),n("th",[t._v("Arrival")]),t._v(" "),n("th",[t._v("Price")]),t._v(" "),n("th",[t._v("Tickets")]),t._v(" "),n("th",[t._v("Agent")]),t._v(" "),n("th",[t._v("Changes")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[this._v("BLR\n                                            "),e("p",[this._v("DOJ: 09-11-2019")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[this._v("VTZ\n                                            "),e("p",[this._v("DOJ: 09-11-2019")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("span",{staticClass:"currency"},[e("i",{staticClass:"ti-"})]),this._v("3277\n                                        "),e("p",[e("a",[this._v("View details "),e("i",{staticClass:"pe-7s-info"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[this._v("BLR\n                                            "),e("p",[this._v("DOJ: 09-11-2019")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[this._v("VTZ\n                                            "),e("p",[this._v("DOJ: 09-11-2019")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("p",{staticClass:"currency"},[this._v("SDG")]),this._v("3277\n                                        "),e("p",[e("a",[this._v("View details "),e("i",{staticClass:"pe-7s-info"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[this._v("BLR\n                                            "),e("p",[this._v("DOJ: 09-11-2019")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[this._v("VTZ\n                                            "),e("p",[this._v("DOJ: 09-11-2019")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("Booking ID")]),t._v(" "),n("th",[t._v("PNR")]),t._v(" "),n("th",[t._v("Departure")]),t._v(" "),n("th",[t._v("Return")]),t._v(" "),n("th",[t._v("Price")]),t._v(" "),n("th",[t._v("Tickets")]),t._v(" "),n("th",[t._v("Agent")]),t._v(" "),n("th",[t._v("Changes")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[this._v("BLR\n                                            "),e("p",[this._v("DOJ: 09-11-2019")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[this._v("VTZ\n                                            "),e("p",[this._v("DOJ: 20-11-2019")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("span",{staticClass:"currency"},[e("i",{staticClass:"ti-"})]),this._v("3277\n                                        "),e("p",[e("a",[this._v("View details "),e("i",{staticClass:"pe-7s-info"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[this._v("BLR\n                                            "),e("p",[this._v("DOJ: 09-11-2019")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[this._v("VTZ\n                                            "),e("p",[this._v("DOJ: 20-11-2019")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("p",{staticClass:"currency"},[this._v("SDG")]),this._v("3277\n                                        "),e("p",[e("a",[this._v("View details "),e("i",{staticClass:"pe-7s-info"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[this._v("BLR\n                                            "),e("p",[this._v("DOJ: 09-11-2019")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[this._v("VTZ\n                                            "),e("p",[this._v("DOJ: 20-11-2019")])])}],!1,null,null,null);e.default=component.exports}}]);