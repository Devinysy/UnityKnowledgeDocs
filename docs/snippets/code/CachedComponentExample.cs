using UnityEngine;

[DisallowMultipleComponent]
[RequireComponent(typeof(Rigidbody))]
public sealed class CachedComponentExample : MonoBehaviour
{
    [SerializeField] private Rigidbody targetBody;

    private Transform cachedTransform;

    private void Awake()
    {
        cachedTransform = transform;

        if (targetBody == null && !TryGetComponent(out targetBody))
        {
            Debug.LogError(
                $"{nameof(CachedComponentExample)} requires a Rigidbody.",
                this);
            enabled = false;
        }
    }
}
