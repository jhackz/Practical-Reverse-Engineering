"use strict";

host.diagnostics.debugLog("*** Practical Reverse Engineering Chapter 3 Exercise 1 ***\n")

function invokeScript()
{
    var ctl = host.namespace.Debugger.Utility.Control;
    var ListofLists = [];   

    var InitializeListHead = [
		"CcAllocateInitializeMbcb",
		"CmpInitCallbacks",
		"ExCreateCallback",
		"ExpInitSystemPhase0",
		"ExpInitSystemPhase1",
		"ExpTimerInitialization",
		"InitBootProcessor",
		"IoCreateDevice",
		"IoInitializeIrp",
		"KeInitThread",
		"KeInitializeMutex",
		"KeInitializeProcess",
		"KeInitializeTimerEx",
		"KeInitializeTimerTable",
		"KiInitializeProcessor",
		"KiInitializeThread",
		"MiInitializeLoadedModuleList",
		"MiInitializePrefetchHead",
		"PspAllocateProcess",
		"PspAllocateThread"];

    ListofLists.push(InitializeListHead);
		
    var InsertHeadList = [
		"CcSetVacbInFreeList",
		"CmpDoSort",
		"ExBurnMemory",
		"ExFreePoolWithTag",
		"IoPageRead",
		"IovpCallDriver1",
		"KeInitThread",
		"KiInsertQueueApc",
		"KeInsertQueueDpc",
		"KiQueueReadyThread",
		"MiInsertInSystemSpace",
		"MiUpdateWsle",
		"ObpInsertCallbackByAltitude"];

    ListofLists.push(InsertHeadList);
		
    var InsertTailList = [
		"AlpcpCreateClientPort",
		"AlpcpCreateSection",
		"AlpcpCreateView",
		"AuthzBasepAddSecurityAttributeToLists",
		"CcFlushCachePriv",
		"CcInitializeCacheManager",
		"CcInsertVacbArray",
		"CcSetFileSizesEx",
		"CmRenameKey",
		"ExAllocatePoolWithTag",
		"ExFreePoolWithTag",
		"ExQueueWorkItem",
		"ExRegisterCallback",
		"ExpSetTimer",
		"IoSetIoCompletionEx2",
		"KeInsertQueueDpc",
		"KeStartThread",
		"KiAddThreadToScbQueue",
		"KiInsertQueueApc",
		"KiQueueReadyThread",
		"MiInsertNewProcess",
		"PnpRequestDeviceAction",
		"PspInsertProcess",
		"PspInsertThread"];

    ListofLists.push(InsertTailList);		
		
    var RemoveHeadList = [
		"AlpcpFlushResourcesPort",
		"CcDeleteMbcb",
		"CcGetVacbMiss",
		"CmpLazyCommitWorker",
		"ExAllocatePoolWithTag",
		"FsRtlNotifyCompleteIrpList",
		"IopInitializeBootDrivers",
		"KiProcessDisconnectList",
		"PnpDeviceCompletionQueueGetCompletedRequest",
		"RtlDestroyAtomTable",
		"RtlEmptyAtomTable",
		"RtlpFreeAllAtom"];

    ListofLists.push(RemoveHeadList);		
		
    var RemoveTailList = [
		"BootApplicationPersistentDataProcess",
		"CmpCallCallBacks",
		"CmpDelayCloseWorker",
		"ObpCallPostOperationCallbacks",
		"RaspAddCacheEntry"];

    ListofLists.push(RemoveTailList);		
		
    var RemoveEntrylist = [
		"AlpcSectionDeleteProcedure",
		"AlpcpDeletePort",
		"AlpcpUnregisterCompletionListDatabase",
		"AuthzBasepRemoveSecurityAttributeFromLists",
		"CcDeleteBcbs",
		"CcFindNextWorkQueueEntry",
		"CcLazyWriteScan",
		"CcSetFileSizesEx",
		"CmShutdownSystem",
		"CmUnRegisterCallback",
		"CmpCallCallBacks",
		"CmpPostApc",
		"ExFreePoolWithTag",
		"ExQueueWorkItem",
		"ExTimerRundown",
		"ExpDeleteTimer",
		"ExpSetTimer",
		"IoDeleteDevice",
		"IoUnregisterFsRegistrationChange",
		"IopfCompleteRequest",
		"KeDeregisterBugCheckCallback",
		"KeDeregisterObjectNotification",
		"KeRegisterObjectNotification",
		"KeRemoveQueueApc",
		"KeRemoveQueueDpc",
		"KiCancelTimer",
		"KeTerminateThread",
		"KiDeliverApc",
		"KiExecuteAllDpcs",
		"KiExpireTimerTable",
		"KiFindReadyThread",
		"KiFlushQueueApc",
		"KiInsertTimerTable",
		"KiProcessExpiredTimerList",
		"MiDeleteVirtualAddresses",
		"NtNotifyChangeMultipleKeys",
		"ObRegisterCallbacks",
		"ObUnRegisterCallbacks"];
    
    ListofLists.push(RemoveEntrylist);

    // Unassemble Function
    var str1 = "uf";
    for (var l of ListofLists)
    {
        host.diagnostics.debugLog("\n[*]", l, "\n");
        for (var fun of l)
        {
            var output = ctl.ExecuteCommand(str1.concat(' ', fun));
            for (var line of output)
            {
                host.diagnostics.debugLog("  ", line, "\n");
            }
        }
    }

    host.diagnostics.debugLog("*** Exiting ***\n");
}
