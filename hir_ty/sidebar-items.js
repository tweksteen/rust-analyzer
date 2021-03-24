initSidebarItems({"enum":[["AliasTy",""],["CallableDefId",""],["ImplTraitId",""],["ImplTraitLoweringMode",""],["Lifetime",""],["Mutability","Whether a type is mutable or not."],["Safety","Whether a function is safe or not."],["Scalar","Types of scalar values."],["TyDefId",""],["TyKind","A type."],["TyVariableKind","Represents some extra knowledge we may have about the type variable."],["ValueTyDefId",""],["WhereClause","Like `generics::WherePredicate`, but with resolved types: A condition on the parameters of a generic item."]],"fn":[["associated_type_shorthand_candidates",""],["autoderef",""],["callable_item_sig","Build the signature of a callable item (function, struct or enum variant)."],["from_assoc_type_id",""],["from_chalk_trait_id",""],["from_foreign_def_id",""],["from_placeholder_idx",""],["param_idx","Return an index of a parameter in the generic type parameter list by it's id."],["to_assoc_type_id",""],["to_chalk_trait_id",""],["to_foreign_def_id",""],["to_placeholder_idx",""]],"mod":[["db","FIXME: write short doc here"],["diagnostics","FIXME: write short doc here"],["display","FIXME: write short doc here"],["method_resolution","This module is concerned with finding methods that a given type provides. For details about how this works in rustc, see the method lookup page in the rustc guide and the corresponding code mostly in librustc_typeck/check/method/probe.rs."],["primitive","Defines primitive types, which have a couple of peculiarities:"],["traits","Trait solving using Chalk."]],"struct":[["AdtId","The id for an Abstract Data Type (i.e. structs, unions and enums)."],["Binders",""],["BoundVar","Identifies a particular bound variable within a binder. Variables are identified by the combination of a [`DebruijnIndex`], which identifies the binder, and an index within that binder."],["CallableSig","A function signature as seen by type inference: Several parameter types and one return type."],["Canonical","Basically a claim (currently not validated / checked) that the contained type / trait ref contains no inference variables; any inference variables it contained have been replaced by bound variables, and `kinds` tells us how many there are and whether they were normal or float/int variables. This is used to erase irrelevant differences between types before using them in queries."],["DebruijnIndex","References the binder at the given depth. The index is a de Bruijn index, so it counts back through the in-scope binders, with 0 being the innermost binder. This is used in impls and the like. For example, if we had a rule like `for<T> { (T: Clone) :- (T: Copy) }`, then `T` would be represented as a `BoundVar(0)` (as the `for` is the innermost binder)."],["DynTy",""],["FnPointer",""],["InferenceResult","The result of type inference: A mapping from expressions and patterns to types."],["InferenceVar","The kinds of placeholders we need during type inference. There's separate values for general types, and for integer and float variables. The latter two are used for inference of literal values (e.g. `100` could be one of several integer types)."],["Interner",""],["OpaqueTy",""],["ProjectionTy","A \"projection\" type corresponds to an (unnormalized) projection like `<P0 as Trait<P1..Pn>>::Foo`. Note that the trait and all its parameters are fully known."],["QuantifiedWhereClauses",""],["ReturnTypeImplTraits",""],["Substitution","A list of substitutions for generic parameters."],["SubstsBuilder",""],["TraitRef","A trait with type parameters. This includes the `Self`, so this represents a concrete type implementing the trait."],["Ty",""],["TyLoweringContext",""]],"trait":[["Cast","The `Cast` trait is used to make annoying upcasts between logically equivalent types that imply wrappers. For example, one could convert a `DomainGoal` into a `Goal` by doing:"],["TypeWalk","This allows walking structures that contain types to do something with those types, similar to Chalk's `Fold` trait."]],"type":[["AssocTypeId",""],["CanonicalVarKinds",""],["ChalkTraitId",""],["ClosureId",""],["FnDefId",""],["FnSig",""],["ForeignDefId",""],["OpaqueTyId",""],["PlaceholderIndex",""],["PolyFnSig","A polymorphic function signature."],["QuantifiedWhereClause",""]]});