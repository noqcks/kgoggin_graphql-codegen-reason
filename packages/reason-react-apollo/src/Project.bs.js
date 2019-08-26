// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Js_undefined = require("bs-platform/lib/js/js_undefined.js");
var ReactHooks = require("@apollo/react-hooks");
var ApolloTypes$ReasonReactApollo = require("./ApolloTypes.bs.js");

function mapEmptyObject(data) {
  var match = Caml_obj.caml_equal(data, { });
  if (match) {
    return undefined;
  } else {
    return Caml_option.some(data);
  }
}

function Make(Config) {
  var MakeQuery = function (QueryConfig) {
    var query = QueryConfig[1];
    var mapOnCompleted = function (oc, jsData) {
      return Curry._1(oc, Curry._1(Config[/* parseQuery */0], jsData));
    };
    var useQuery = function (overrideQuery, displayName, skip, variables, fetchPolicy, errorPolicy, pollInterval, client, notifyOnNetworkStatusChange, context, partialRefetch, returnPartialData, ssr, onCompleted, onError, param) {
      var tmp = { };
      if (displayName !== undefined) {
        tmp.displayName = Caml_option.valFromOption(displayName);
      }
      if (skip !== undefined) {
        tmp.skip = Caml_option.valFromOption(skip);
      }
      var tmp$1 = Belt_Option.map(variables, QueryConfig[/* parse */0]);
      if (tmp$1 !== undefined) {
        tmp.variables = Caml_option.valFromOption(tmp$1);
      }
      if (fetchPolicy !== undefined) {
        tmp.fetchPolicy = Caml_option.valFromOption(fetchPolicy);
      }
      if (errorPolicy !== undefined) {
        tmp.errorPolicy = Caml_option.valFromOption(errorPolicy);
      }
      if (pollInterval !== undefined) {
        tmp.pollInterval = Caml_option.valFromOption(pollInterval);
      }
      if (client !== undefined) {
        tmp.client = Caml_option.valFromOption(client);
      }
      if (notifyOnNetworkStatusChange !== undefined) {
        tmp.notifyOnNetworkStatusChange = Caml_option.valFromOption(notifyOnNetworkStatusChange);
      }
      if (context !== undefined) {
        tmp.context = Caml_option.valFromOption(context);
      }
      if (partialRefetch !== undefined) {
        tmp.partialRefetch = Caml_option.valFromOption(partialRefetch);
      }
      if (returnPartialData !== undefined) {
        tmp.returnPartialData = Caml_option.valFromOption(returnPartialData);
      }
      if (ssr !== undefined) {
        tmp.ssr = Caml_option.valFromOption(ssr);
      }
      var tmp$2 = Belt_Option.map(onCompleted, mapOnCompleted);
      if (tmp$2 !== undefined) {
        tmp.onCompleted = Caml_option.valFromOption(tmp$2);
      }
      if (onError !== undefined) {
        tmp.onError = Caml_option.valFromOption(onError);
      }
      var opt = tmp;
      var response = ReactHooks.useQuery(Belt_Option.getWithDefault(overrideQuery, query), opt);
      return /* record */[
              /* data */Belt_Option.map(Belt_Option.flatMap(Caml_option.undefined_to_opt(response.data), mapEmptyObject), Config[/* parseQuery */0]),
              /* loading */response.loading,
              /* error */Caml_option.undefined_to_opt(response.error),
              /* variables */Curry._1(QueryConfig[/* parse */0], response.variables),
              /* networkStatus */response.networkStatus
            ];
    };
    return /* module */[
            /* parse */QueryConfig[0],
            /* query */query,
            /* mapOnCompleted */mapOnCompleted,
            /* useQuery */useQuery
          ];
  };
  var MakeMutation = function (MutationConfig) {
    var useMutation = function (overrideMutation, variables, param) {
      var tmp = { };
      var tmp$1 = Belt_Option.map(variables, MutationConfig[/* parse */0]);
      if (tmp$1 !== undefined) {
        tmp.variables = Caml_option.valFromOption(tmp$1);
      }
      var opt = tmp;
      var match = ReactHooks.useMutation(Belt_Option.getWithDefault(overrideMutation, MutationConfig[/* mutation */1]), opt);
      var responseJs = match[1];
      var mutateJs = match[0];
      var mutate = function (variables, param) {
        return Curry._1(mutateJs, {
                      variables: Js_undefined.fromOption(Belt_Option.map(variables, MutationConfig[/* parse */0])),
                      optimisticResponse: undefined
                    }).then((function (jsResponse) {
                      return Promise.resolve(/* record */[
                                  /* data */Belt_Option.map(Belt_Option.flatMap(Caml_option.undefined_to_opt(jsResponse.data), mapEmptyObject), Config[/* parseMutation */1]),
                                  /* errors */Caml_option.undefined_to_opt(jsResponse.errors)
                                ]);
                    }));
      };
      return /* tuple */[
              mutate,
              /* record */[
                /* data */Belt_Option.map(Belt_Option.flatMap(Caml_option.undefined_to_opt(responseJs.data), mapEmptyObject), Config[/* parseMutation */1]),
                /* error */Caml_option.undefined_to_opt(responseJs.error),
                /* loading */responseJs.loading,
                /* called */responseJs.called
              ]
            ];
    };
    return /* module */[
            /* parse */MutationConfig[0],
            /* mutation */MutationConfig[1],
            /* useMutation */useMutation
          ];
  };
  return /* module */[
          /* ApolloProvider */ApolloTypes$ReasonReactApollo.ApolloProvider,
          /* MakeQuery */MakeQuery,
          /* MakeMutation */MakeMutation
        ];
}

exports.mapEmptyObject = mapEmptyObject;
exports.Make = Make;
/* @apollo/react-hooks Not a pure module */
