initSidebarItems({"enum":[["Change","This enum represents the different changes the `TrackedStorage` can detect."],["InsertResult","The status of an `insert()`ion into a storage."],["MergeError","The error type returned by [`Storage::merge`]."],["NormalRestriction","Specifies that the `RestrictedStorage` cannot run in parallel."],["ParallelRestriction","Specifies that the `RestrictedStorage` can run in parallel."],["RunningTime",""],["StorageEntry","Entry to a storage for convenient filling of components or removal based on whether the entity has a component."]],"mod":[["common","Common functionality you might need when using Specs."],["error","Specs error module."],["saveload","Save and load entities from various formats with serde."]],"struct":[["AsyncDispatcher","Like, `Dispatcher` but works asynchronously."],["BTreeStorage","BTreeMap-based storage."],["ChangeEvents","Events iterator for all events between the last reset and the last, eventual maintain. See `Change` docs for more explanations."],["CreateIter","An iterator for entity creation. Please note that you have to consume it because iterators are lazy."],["CreateIterAtomic","An iterator for entity creation. Please note that you have to consume it because iterators are lazy."],["DenseVecStorage","Dense vector storage. Has a redirection 2-way table between entities and components, allowing to leave no gaps within the data."],["Dispatcher","The dispatcher struct, allowing systems to be executed in parallel."],["DispatcherBuilder","Builder for the [`Dispatcher`]."],["EntitiesRes","The entities of this ECS. This is a resource, stored in the `World`. If you just want to access it in your system, you can also use the `Entities` type def."],["Entity","`Entity` type, as seen by the user."],["EntityBuilder","The entity builder, allowing to build an entity together with its components."],["Entry","An entry to a storage."],["Fetch","Return value of [`Resources::fetch`]."],["FetchId","Return value of [`Resources::fetch_id`]."],["FetchIdMut","Return value of [`Resources::fetch_id_mut`]."],["FetchMut","Return value of [`Resources::fetch_mut`]."],["FlaggedStorage","Wrapper storage that stores modifications to components in a bitset."],["Generation","Index generation. When a new entity is placed at an old index, it bumps the `Generation` by 1. This allows to avoid using components from the entities that were deleted."],["HashMapStorage","HashMap-based storage. Best suited for rare components."],["JoinIter","`JoinIter` is an `Iterator` over a group of `Storages`."],["JoinParIter","`JoinParIter` is a `ParallelIterator` over a group of `Storages`."],["LazyUpdate","Lazy updates can be used for world updates that need to borrow a lot of resources and as such should better be done at the end. They work lazily in the sense that they are dispatched when calling `world.maintain()`. Please note that the provided methods take `&self` so there's no need to fetch `LazyUpdate` mutably. This resource is added to the world by default."],["MaskedStorage","The `UnprotectedStorage` together with the `BitSet` that knows about which elements are stored, and which are not."],["NullStorage","A null storage type, used for cases where the component doesn't contain any data and instead works as a simple flag."],["OccupiedEntry","An entry to a storage which has a component associated to the entity."],["PackedData","Structure of packed components with offsets of which entities they belong to. Offsets define which entities the components correspond to, based on a list of entities the packed data is sent in with."],["RestrictedStorage","Similar to a `MaskedStorage` and a `Storage` combined, but restricts usage to only getting and modifying the components. That means nothing that would modify the inner bitset so the iteration cannot be invalidated. For example, no insertion or removal is allowed."],["RudyStorage","Rudy-based storage."],["Storage","A wrapper around the masked storage and the generations vector. Can be used for safe lookup of components, insertions and removes. This is what `World::read/write` fetches for the user."],["TrackedStorage","Storage which tracks changes."],["VacantEntry","An entry to a storage which does not have a component associated to the entity."],["VecStorage","Vector storage. Uses a simple `Vec`. Supposed to have maximum performance for the components mostly present in entities."],["World","The `World` struct contains the component storages and other resources."]],"trait":[["Component","Abstract component type. Doesn't have to be Copy or even Clone."],["DistinctStorage","This is a marker trait which requires you to uphold the following guarantee:"],["Join","The purpose of the `Join` trait is to provide a way to access multiple storages at the same time with the merged bit set."],["ParJoin","The purpose of the `ParJoin` trait is to provide a way to access multiple storages in parallel at the same time with the merged bit set."],["RunNow","Trait for fetching data and running systems. Automatically implemented for systems."],["System","A `System`, executed with a set of required [`Resource`]s."],["SystemData","A struct implementing system data indicates that it bundles some resources which are required for the execution."],["UnprotectedStorage","Used by the framework to quickly join components."]],"type":[["Entities","A wrapper for a fetched `Entities` resource. Note that this is just `Fetch<Entities>`, so you can easily use it in your system:"],["Index","An index is basically the id of an `Entity`."],["ReadStorage","A storage with read access."],["WriteStorage","A storage with read and write access."]]});